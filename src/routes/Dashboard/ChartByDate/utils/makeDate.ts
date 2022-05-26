import { ITrendDataByDate, ITrendDataItem } from 'types/chart'

export const makeDataByTrend = (data: ITrendDataItem[]) => {
  const init: ITrendDataByDate[] = []
  const newArr = data.reduce((acc: ITrendDataByDate[], cur: ITrendDataItem) => {
    acc.push({
      ...cur,
      conversion: Math.round((cur.click * cur.cvr) / 100),
      sales: Math.round((cur.roas * cur.cost) / 100),
    })
    return acc
  }, init)
  return newArr
}
