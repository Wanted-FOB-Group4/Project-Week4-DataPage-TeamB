import axios, { AxiosResponse } from 'axios'

import { makeChannelData } from 'routes/Dashboard/utils/makeChannelData'
import { sumChannelData } from 'routes/Dashboard/utils/sumChannedlData'
import { setFetchDelay, translateDate } from 'utils'

export const getMediaChannelData = (startDate: string, endDate: string) =>
  axios
    .get('/wanted_FE-media-channel-data-set.json')
    .then(setFetchDelay(500))
    .then((response: AxiosResponse) => {
      const { data } = response
      const result = data.filter(
        (item: IMediaChannelData) =>
          translateDate(item.date) >= translateDate(startDate) && translateDate(item.date) <= translateDate(endDate)
      )

      return sumChannelData(makeChannelData(result))
    })
