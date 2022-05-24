import axios, { AxiosResponse } from 'axios'
import store from 'store'

import { IAd, IAdData } from 'types/ads'
import { setFetchDelay, setFetchDelayPromise } from 'utils'

const STATUS = ['all', 'active', 'ended']

export const getAdListData = (adsFilterIndex: number) => {
  const filterData = (data: IAdData) => {
    if (adsFilterIndex === 0) return data
    const newData: IAdData = {
      count: 0,
      ads: [],
    }
    newData.ads = data.ads.filter((ad: IAd) => ad.status === STATUS[adsFilterIndex])
    newData.count = newData.ads.length
    return newData
  }

  const promise = new Promise((resolve: (value: IAdData) => void, reject) => {
    const data: IAdData = store.get('adsData')
    if (!data) {
      console.log('data not found in local storage... fetch from axios')
      reject()
    } else resolve(data)
  })
  return promise
    .then(setFetchDelayPromise(500))
    .then((data: IAdData) => {
      return filterData(data)
    })
    .catch(() =>
      axios
        .get('/wanted_FE_ad-list-data-set.json')
        .then(setFetchDelay(500))
        .then((response: AxiosResponse) => {
          const newData = filterData(response.data)
          store.set('adsData', newData)
          return newData
        })
    )
}
