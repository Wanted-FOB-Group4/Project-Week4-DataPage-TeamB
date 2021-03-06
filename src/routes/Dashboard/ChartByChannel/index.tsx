import { useRef, useState } from 'react'
import {
  VictoryAxis,
  VictoryBar,
  VictoryChart,
  VictoryLabel,
  VictoryLegend,
  VictoryStack,
  VictoryTheme,
  VictoryVoronoiContainer,
} from 'victory'
import { useMount, useUnmount } from 'react-use'

import { ITotalChannelData } from 'types/chart'

import styles from './chartByChannel.module.scss'

interface IProps {
  data: ITotalChannelData
}

const ChartByChannel = ({ data }: IProps) => {
  const colors = ['#2DB400', '#f9e000', '#AC8AF8', '#1778F2']
  const channels = ['naver', 'kakao', 'google', 'facebook']
  const containerRef = useRef<null | HTMLDivElement>(null)
  const [width, setWidth] = useState(1400)
  const onResize = () => {
    const containerWidth = Number(containerRef.current?.offsetWidth)
    setWidth(containerWidth >= 1000 ? containerWidth : 1000)
  }
  useMount(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth
      setWidth(containerWidth >= 1000 ? containerWidth : 1000)
    }
    window.addEventListener('resize', onResize)
  })
  useUnmount(() => {
    window.removeEventListener('resize', onResize)
  })
  const barChart = channels.map((channel, idx) => {
    const key = `bar-${channel}`
    return (
      <VictoryBar
        key={key}
        barWidth={30}
        style={{ data: { fill: colors[idx] } }}
        data={[
          { x: '광고비', y: data[channel].cost },
          { x: '매출', y: data[channel].sales },
          { x: '노출수', y: data[channel].imp },
          { x: '클릭수', y: data[channel].click },
          { x: '전환수', y: data[channel].conversion },
        ]}
        y={(datum) => {
          const target = String(datum.x)
          const symbol = {
            광고비: data.total.cost,
            매출: data.total.sales,
            노출수: data.total.imp,
            클릭수: data.total.click,
            전환수: data.total.conversion,
          }[target]
          return (datum.y / Number(symbol)) * 100
        }}
      />
    )
  })
  return (
    <div className={styles.chartContainer} ref={containerRef}>
      <VictoryChart
        theme={VictoryTheme.material}
        domainPadding={{ x: 80, y: 30 }}
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
        <VictoryLegend
          x={width - 380}
          y={380}
          orientation='horizontal'
          gutter={40}
          colorScale={['#1778F2', '#AC8AF8', '#f9e000', '#2DB400']}
          data={[{ name: '페이스북' }, { name: '구글' }, { name: '카카오' }, { name: '네이버' }]}
        />
        <VictoryAxis
          scale={{ x: 'time' }}
          tickFormat={(x) => x}
          style={{
            axis: { stroke: '#cccccc', strokeWidth: 0.5 },
            tickLabels: { fontSize: 12, padding: 10, fill: '#cccccc' },
            ticks: { size: 0 },
          }}
        />
        <VictoryAxis
          dependentAxis
          tickLabelComponent={<VictoryLabel verticalAnchor='start' textAnchor='start' dy={5} dx={8} />}
          tickFormat={(y) => `${y}%`}
          style={{
            axis: { stroke: 'transparent' },
            tickLabels: { fontSize: 12, padding: 10, fill: '#cccccc' },
            ticks: { size: 0 },
            grid: { stroke: '#cccccc', strokeWidth: 0.5, strokeDasharray: 0 },
          }}
        />
        <VictoryStack width={40} style={{ data: { stroke: 'white', strokeWidth: 0.5 } }}>
          {barChart}
        </VictoryStack>
      </VictoryChart>
    </div>
  )
}

export default ChartByChannel
