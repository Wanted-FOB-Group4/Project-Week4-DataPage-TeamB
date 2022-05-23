import { VictoryChart, VictoryLine, VictoryAxis, VictoryTooltip, VictoryVoronoiContainer } from 'victory'

import dayjs from 'dayjs'

import { makeDataByTrend } from 'utils/makeDataByTrend'

const COLOR = {
  roas: '#4FADF7',
  click: '#85DA47',
  cost: '#AC8AF8',
  imp: '#f9e000',
  salse: '#EA3A4B',
  conversion: '#3A474E',
}

// ROAS, 광고비, 노출수, 클릭수, 전환 수, 매출 중 선택가능.
const ChartByDate = () => {
  const firstTarget = 'click'
  const secondTarget = 'conversion'
  const totalDataByDate = makeDataByTrend('2022-02-01', '2022-02-11')
  let firstMax = 0
  let secondMax = 0
  const firstData = totalDataByDate.map((item) => {
    firstMax = Math.max(firstMax, item[firstTarget])
    return { x: item.date, y: item[firstTarget] }
  })
  const secondData =
    secondTarget &&
    totalDataByDate.map((item) => {
      secondMax = Math.max(secondMax, item[secondTarget])
      return { x: item.date, y: item[secondTarget] }
    })

  let firstDigit = 1
  let secondDigit = 1
  while (firstDigit * 10 < firstMax) {
    firstDigit *= 10
  }
  while (secondDigit * 10 < secondMax) {
    secondDigit *= 10
  }

  firstMax = (Math.floor(firstMax / firstDigit) + 1) * firstDigit
  secondMax = (Math.floor(secondMax / secondDigit) + 1) * secondDigit

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
        <VictoryAxis
          key={firstTarget}
          dependentAxis
          tickValues={[0.25, 0.5, 0.75, 1]}
          tickFormat={(t) => {
            return t * firstMax
          }}
          style={{
            axis: { stroke: 'transparent' },
            tickLabels: { fontSize: 12, padding: 10, fill: '#cccccc' },
            ticks: { stroke: '#eeeeee', size: 0 },
            grid: { stroke: '#eeeeee' },
          }}
        />
        {secondTarget && (
          <VictoryAxis
            dependentAxis
            key={secondTarget}
            offsetX={970}
            tickValues={[0.25, 0.5, 0.75, 1]}
            tickFormat={(t) => {
              return t * secondMax * 2
            }}
            style={{
              axis: { stroke: 'transparent' },
              tickLabels: { fontSize: 12, padding: 10, fill: '#cccccc', textAnchor: 'start' },
              ticks: { stroke: '#eeeeee', size: 0 },
              grid: { stroke: '#eeeeee' },
            }}
          />
        )}

        <VictoryLine
          key={firstTarget}
          data={firstData}
          style={{
            data: {
              stroke: COLOR[firstTarget],
            },
            labels: { fontSize: 10 },
          }}
          y={(datum) => datum.y / firstMax}
          labelComponent={<VictoryTooltip dy={0} centerOffset={{ x: 25 }} />}
        />
        {secondTarget && (
          <VictoryLine
            key={secondTarget}
            data={secondData}
            style={{
              data: {
                stroke: COLOR[secondTarget],
              },
              labels: { fontSize: 10 },
            }}
            y={(datum) => datum.y / (secondMax * 2)}
            labelComponent={<VictoryTooltip dy={0} centerOffset={{ x: 25 }} />}
          />
        )}
      </VictoryChart>
    </div>
  )
}

export default ChartByDate
