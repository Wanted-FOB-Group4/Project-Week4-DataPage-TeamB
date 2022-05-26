import axios from 'axios'

import { setFetchDelay, translateDate } from 'utils'

export const getFilterTrendData = (startDate: string, endDate: string) =>
  axios
    .get('/wanted_FE_trend-data-set.json')
    .then(setFetchDelay(500))
    .then((response) => {
      const { daily } = response.data.report
      const result = daily.filter(
        (item: ITrendData) =>
          translateDate(item.date) >= translateDate(startDate) && translateDate(item.date) <= translateDate(endDate)
      )

      return result
    })
