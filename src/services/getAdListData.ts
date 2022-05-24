import { IAd, IAdData } from 'types/ads'
// wanted_FE_ad-list-data-set.json
import axios, { AxiosResponse } from 'axios'
import { setFetchDelay } from 'utils'

const STATUS = ['all', 'active', 'ended']

export const getAdListData = (adsFilterIndex: number) =>
  axios
    .get('/wanted_FE_ad-list-data-set.json')
    .then(setFetchDelay(500))
    .then((response: AxiosResponse) => {
      if (adsFilterIndex === 0) return response.data
      const newData: IAdData = {
        count: 0,
        ads: [],
      }
      newData.ads = response.data.ads.filter((ad: IAd) => ad.status === STATUS[adsFilterIndex])
      newData.count = newData.ads.length
      return newData
    })
