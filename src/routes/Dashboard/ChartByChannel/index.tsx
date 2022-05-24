import { makeDataByDate, makeDateSumData } from 'utils'
import { VictoryAxis, VictoryBar, VictoryChart, VictoryStack, VictoryTheme } from 'victory'

const ChartByChannel = () => {
  const data = makeDateSumData(makeDataByDate('2022-02-01', '2022-02-20'))
  const colors = ['#2DB400', '#f9e000', '#AC8AF8', '#1778F2']
  const channels = ['naver', 'kakao', 'google', 'facebook']
  const barChart = channels.map((channel, idx) => {
    const key = `bar-${channel}`
    return (
      <VictoryBar
        key={key}
        barWidth={30}
        style={{ data: { fill: colors[idx] } }}
        data={[
          { x: '광고비', y: (data[channel].cost / data.total.cost) * 100 },
          { x: '매출', y: (data[channel].sales / data.total.sales) * 100 },
          { x: '노출수', y: (data[channel].imp / data.total.imp) * 100 },
          { x: '클릭 수', y: (data[channel].click / data.total.click) * 100 },
          { x: '전환수', y: (data[channel].conversion / data.total.conversion) * 100 },
        ]}
      />
    )
  })
  return (
    <div>
      <VictoryChart theme={VictoryTheme.material} domainPadding={{ x: 50, y: 30 }} width={950}>
        <VictoryAxis
          scale={{ x: 'time' }}
          tickFormat={(x) => x}
          style={{
            axis: { stroke: 'black', strokeWidth: 0.5 },
            tickLabels: { fontSize: 12, padding: 10, fill: '#cccccc' },
            ticks: { size: 0 },
          }}
        />
        <VictoryAxis
          dependentAxis
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
