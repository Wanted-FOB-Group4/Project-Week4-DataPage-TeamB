import trendData from 'data/trend-data-set.json'
import dayjs from 'dayjs'

import { ITrendDataByDate, ITrendDataItem } from 'types/chart'

export const makeDataByTrend = (startDate: string, endDate: string) => {
  const init: ITrendDataByDate[] = []
  const startUnix = dayjs(startDate).unix()
  const endUnix = dayjs(endDate).unix()
  const newArr = trendData.report.daily.reduce((acc: ITrendDataByDate[], cur: ITrendDataItem) => {
    if (dayjs(cur.date).unix() >= startUnix && dayjs(cur.date).unix() <= endUnix) {
      acc.push({
        ...cur,
        conversion: Math.round((cur.click * cur.cvr) / 100),
        sales: Math.round((cur.roas * cur.cost) / 100),
      })
    }
    return acc
  }, init)
  return newArr
}
