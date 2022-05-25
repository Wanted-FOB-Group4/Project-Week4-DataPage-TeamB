import { ITrendDataByDate } from 'types/chart'

interface IProps {
  selectors: { title: string; name: string }[]
  data: ITrendDataByDate[]
  maxs: number[]
}

export const makeDataForChart = ({ selectors, data, maxs }: IProps) => {
  const newData = selectors.map((target: { name: string; title: string }, idx) =>
    data.map((item) => {
      maxs[idx] = Math.max(maxs[idx], item[target.name])
      return { x: item.date, y: item[target.name] }
    })
  )
  return { newData, maxs }
}
