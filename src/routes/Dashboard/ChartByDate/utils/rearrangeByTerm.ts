import dayjs from 'dayjs'

import { ITrendDataByDate } from 'types/chart'

export const rearrangeByTerm = (data: ITrendDataByDate[]) => {
  const newArr = []
  let start = 0
  let end = 7
  while (start < data.length) {
    const INIT_DATA_ITEM: ITrendDataByDate = {
      imp: 0,
      click: 0,
      cost: 0,
      conv: 0,
      convValue: 0,
      ctr: 0,
      cvr: 0,
      cpc: 0,
      cpa: 0,
      roas: 0,
      conversion: 0,
      sales: 0,
    }
    const targetData = data.slice(start, end)
    const sumDataByTerm = targetData.reduce((acc: ITrendDataByDate, cur: ITrendDataByDate) => {
      Object.keys(cur).forEach((key) => {
        acc[key] += cur[key]
      })
      return acc
    }, INIT_DATA_ITEM)
    const newItem = {
      ...sumDataByTerm,
      date: `${dayjs(targetData[0].date).format('M')}.${dayjs(targetData[0].date).format('D')}-${dayjs(
        targetData[targetData.length - 1].date
      ).format('M')}.${dayjs(targetData[targetData.length - 1].date).format('D')}`,
    }
    start = end
    end = start + 7
    newArr.push(newItem)
  }
  return newArr
}
