import { makeDataByDate, makeDateSumData } from 'utils'
import { VictoryAxis, VictoryBar, VictoryChart, VictoryStack, VictoryTheme } from 'victory'

const ChartByChannel = () => {
  const data = makeDateSumData(makeDataByDate('2022-02-01', '2022-02-20'))
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
          <VictoryBar
            barWidth={30}
            style={{ data: { fill: '#2DB400' } }}
            data={[
              { x: '광고비', y: (data.naver.cost / data.total.cost) * 100 },
              { x: '매출', y: (data.naver.sales / data.total.sales) * 100 },
              { x: '노출수', y: (data.naver.imp / data.total.imp) * 100 },
              { x: '클릭 수', y: (data.naver.click / data.total.click) * 100 },
              { x: '전환수', y: (data.naver.conversion / data.total.conversion) * 100 },
            ]}
          />
          <VictoryBar
            barWidth={30}
            style={{ data: { fill: '#f9e000' } }}
            data={[
              { x: '광고비', y: (data.kakao.cost / data.total.cost) * 100 },
              { x: '매출', y: (data.kakao.sales / data.total.sales) * 100 },
              { x: '노출수', y: (data.kakao.imp / data.total.imp) * 100 },
              { x: '클릭 수', y: (data.kakao.click / data.total.click) * 100 },
              { x: '전환수', y: (data.kakao.conversion / data.total.conversion) * 100 },
            ]}
          />
          <VictoryBar
            barWidth={30}
            style={{ data: { fill: '#AC8AF8' } }}
            data={[
              { x: '광고비', y: (data.google.cost / data.total.cost) * 100 },
              { x: '매출', y: (data.google.sales / data.total.sales) * 100 },
              { x: '노출수', y: (data.google.imp / data.total.imp) * 100 },
              { x: '클릭 수', y: (data.google.click / data.total.click) * 100 },
              { x: '전환수', y: (data.google.conversion / data.total.conversion) * 100 },
            ]}
          />
          <VictoryBar
            barWidth={30}
            cornerRadius={{ topLeft: 4, topRight: 4 }}
            style={{ data: { fill: '#1778F2' } }}
            data={[
              { x: '광고비', y: (data.facebook.cost / data.total.cost) * 100 },
              { x: '매출', y: (data.facebook.sales / data.total.sales) * 100 },
              { x: '노출수', y: (data.facebook.imp / data.total.imp) * 100 },
              { x: '클릭 수', y: (data.facebook.click / data.total.click) * 100 },
              { x: '전환수', y: (data.facebook.conversion / data.total.conversion) * 100 },
            ]}
          />
        </VictoryStack>
      </VictoryChart>
    </div>
  )
}

export default ChartByChannel
