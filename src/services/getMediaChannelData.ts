import axios, { AxiosResponse } from 'axios'

import { makeDataByDate, makeDateSumData, setFetchDelay } from 'utils'

export const getMediaChannelData = (startDate: string, endDate: string) =>
  axios
    .get('/wanted_FE-media-channel-data-set.json')
    .then(setFetchDelay(500))
    .then((response: AxiosResponse) => {
      const { data } = response
      const { google, kakao, naver, facebook } = makeDataByDate(startDate, endDate, data)
      const dataByChannel = makeDateSumData({ google, kakao, naver, facebook })
      return dataByChannel
    })
