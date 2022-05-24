import { VictoryChart, VictoryLine, VictoryAxis, VictoryTooltip, VictoryVoronoiContainer } from 'victory'
import dayjs from 'dayjs'

import { makeDataByTrend } from 'utils/makeDataByTrend'
import { useRecoilValue } from 'recoil'
import { selectorState } from 'states/dashBoard'

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

const ChartByDate = () => {
  const selectors = useRecoilValue(selectorState)
  const filteredSelectors = selectors.filter((target: { name: string; title: string }) => target.name !== '')
  const totalDataByDate = makeDataByTrend('2022-02-01', '2022-02-11')
  const maxs = [0, 0]
  const offSet = [50, 1000]
  const datas = filteredSelectors.map((target: { name: string; title: string }, idx) =>
    totalDataByDate.map((item) => {
      maxs[idx] = Math.max(maxs[idx], item[target.name])
      return { x: item.date, y: item[target.name] }
    })
  )
  const maxDatas = maxs.map((maxData) => {
    let digit = 1
    while (digit * 10 < maxData) {
      digit *= 10
    }
    return (Math.floor(maxData / digit) + 1) * digit
  })
  const axisesY = filteredSelectors.map((target: { name: string; title: string }, idx) => {
    const key = `Axis-${target.name}`
    return (
      <VictoryAxis
        key={key}
        dependentAxis
        offsetX={offSet[idx]}
        tickValues={[0.25, 0.5, 0.75, 1]}
        tickFormat={(t) => {
          return t * maxDatas[idx]
        }}
        style={{
          axis: { stroke: 'transparent' },
          tickLabels: { fontSize: 12, padding: 10, fill: '#cccccc' },
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
    <div style={{ height: '400px' }}>
      <VictoryChart
        domainPadding={{ x: 50, y: 30 }}
        height={400}
        width={1000}
        containerComponent={
          <VictoryVoronoiContainer
            labels={({ datum }) => {
              return datum.y
            }}
          />
        }
      >
        <VictoryAxis
          scale={{ x: 'time' }}
          tickFormat={(x) => `${dayjs(x).format('M')}월 ${dayjs(x).format('D')}일`}
          style={{
            axis: { strokeWidth: 0.5, fill: 'black' },
            tickLabels: { fontSize: 12, padding: 10, fill: '#cccccc' },
            ticks: { stroke: 'grey', size: 0 },
          }}
        />
        {axisesY}
        {lineChartes}
      </VictoryChart>
    </div>
  )
}

export default ChartByDate