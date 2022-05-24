import axios from 'axios'
import { translateDate } from 'utils/translateDate'

// wanted_FE_trend-data-set.json
export const getFilterTrendData = (startDate: string, endDate: string) =>
  axios.get('/wanted_FE_trend-data-set.json').then((response) => {
    const { daily } = response.data.report
    const result = daily.filter(
      (item: ITrendData) =>
        translateDate(item.date) >= translateDate(startDate) && translateDate(item.date) <= translateDate(endDate)
    )

    if (result.length === 0) console.log('error')

    return result
  })
