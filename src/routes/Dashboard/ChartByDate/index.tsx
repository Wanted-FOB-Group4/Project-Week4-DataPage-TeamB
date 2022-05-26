import { useEffect, useRef, useState } from 'react'
import { VictoryChart, VictoryLine, VictoryAxis, VictoryTooltip, VictoryVoronoiContainer, VictoryLabel } from 'victory'
import { useRecoilState, useRecoilValue } from 'recoil'
import { useQuery } from 'react-query'

import { isChartViewState, selectorState } from '../states/dashBoard'
import { dateRangeState, dateTermState } from '../states/date'
import { shortenNumber, makeMaxDatas, conditionalDateFormat, makeDataForChart } from './utils'
import { rearrangeByTerm } from './utils/rearrangeByTerm'
import styles from './chartByDate.module.scss'
import NeedMoreDate from './NeedForDate'

import { getFilterTrendData } from 'services/getTrendData'

interface ICOLOR {
  roas: string
  click: string
  cost: string
  imp: string
  sales: string
  conversion: string

  [key: string]: any
}
const COLOR: ICOLOR = {
  roas: '#4FADF7',
  click: '#85DA47',
  cost: '#AC8AF8',
  imp: '#f9e000',
  sales: '#EA3A4B',
  conversion: '#3A474E',
}

type Position = 'left' | 'right'
type Anchor = 'start' | 'end'

const ChartByDate = () => {
  const { from, to } = useRecoilValue(dateRangeState)
  const { data: totalDataByDate } = useQuery(['#trendData', from, to], () => getFilterTrendData(from, to), {
    refetchOnWindowFocus: false,
    staleTime: 60000,
    cacheTime: Infinity,
    suspense: true,
    useErrorBoundary: true,
  })
  const selectors = useRecoilValue(selectorState)
  const dateTerm = useRecoilValue(dateTermState)
  const containerRef = useRef<null | HTMLDivElement>(null)
  const [width, setWidth] = useState(0)
  const [isChartView, setIsChartView] = useRecoilState(isChartViewState)

  const filteredSelectors = selectors.filter((target: { name: string; title: string }) => target.name !== '')
  const chartData = dateTerm.title === '일간' ? totalDataByDate : rearrangeByTerm(totalDataByDate)
  const position: Position[] = ['left', 'right']
  const textAnchor: Anchor[] = ['start', 'end']

  useEffect(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth
      setWidth(() => {
        if (containerWidth >= 100 * chartData.length) return containerWidth
        return 100 * chartData.length
      })
      const curWidth = containerWidth >= 100 * chartData.length ? containerWidth : 100 * chartData.length
      if (curWidth === width) {
        setIsChartView(true)
      }
    }
  }, [chartData.length, setIsChartView, width])

  if (totalDataByDate.length < 21 && dateTerm.title === '주간') return <NeedMoreDate />

  const { newData: datas, maxs } = makeDataForChart({ selectors: filteredSelectors, data: chartData, maxs: [0, 0] })
  const maxDatas = makeMaxDatas(maxs)

  const axisesY = filteredSelectors.map((target: { name: string; title: string }, idx) => {
    const key = `Axis-${target.name}`
    return (
      <VictoryAxis
        key={key}
        dependentAxis
        tickLabelComponent={<VictoryLabel verticalAnchor='start' textAnchor={textAnchor[idx]} dy={5} dx={5} />}
        orientation={position[idx]}
        tickValues={[0.25, 0.5, 0.75, 1]}
        tickFormat={(t) => {
          return shortenNumber(t * maxDatas[idx])
        }}
        style={{
          axis: { stroke: 'transparent' },
          tickLabels: { fontSize: 10, padding: 0, fill: '#cccccc' },
          ticks: { stroke: '#eeeeee', size: 0 },
          grid: { stroke: '#eeeeee' },
        }}
      />
    )
  })
  const lineChartes = filteredSelectors.map((target: { name: string; title: string }, idx) => {
    const key = `lineChart-${target}`
    return (
      <VictoryLine
        key={key}
        data={datas[idx]}
        style={{
          data: {
            stroke: COLOR[target.name],
          },
          labels: { fontSize: 10 },
        }}
        y={(datum) => datum.y / maxDatas[idx]}
        labelComponent={<VictoryTooltip dy={0} centerOffset={{ x: 25 }} />}
      />
    )
  })
  return (
    <div className={styles.lineChartContainer} ref={containerRef}>
      {isChartView && (
        <VictoryChart
          domainPadding={{ x: [80, 80], y: 60 }}
          height={400}
          width={width}
          containerComponent={
            <VictoryVoronoiContainer
              className={styles.chart}
              responsive={false}
              labels={({ datum }) => {
                return datum.y.toLocaleString()
              }}
            />
          }
        >
          <VictoryAxis
            scale={{ x: 'time' }}
            tickFormat={(x) => conditionalDateFormat(x, dateTerm.title)}
            style={{
              axis: { strokeWidth: 0.5, stroke: '#cccccc' },
              tickLabels: { fontSize: 12, padding: 10, fill: '#cccccc' },
              ticks: { stroke: '#cccccc', size: 0 },
            }}
          />
          {axisesY}
          {lineChartes}
        </VictoryChart>
      )}
    </div>
  )
}

export default ChartByDate
