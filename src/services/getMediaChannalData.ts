// wanted_FE-media-channel-data-set.json

import axios from 'axios'
import { translateDate } from 'utils/translateDate'

export const getMediaChannelData = (startDate: string, endDate: string) =>
  axios.get('/wanted_FE-media-channel-data-set.json').then((response) => {
    const { data } = response
    const result = data.filter(
      (item: IMediaChannelData) =>
        translateDate(item.date) >= translateDate(startDate) && translateDate(item.date) <= translateDate(endDate)
    )
    if (result.length === 0) console.log('error')

    console.log(result)

    return result
  })
