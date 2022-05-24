import axios, { AxiosResponse } from 'axios'
import store from 'store'

import { IAdData } from 'types/ads'
import { setFetchDelay, setFetchDelayPromise } from 'utils'

export const getAdListData = () => {
  const promise = new Promise((resolve: (value: IAdData) => void, reject) => {
    const data: IAdData = store.get('adsData')
    if (!data) {
      console.log('data not found in local storage... fetch from axios')
      reject()
    } else resolve(data)
  })
  return promise
    .then(setFetchDelayPromise(500))
    .then((data: IAdData) => data)
    .catch(() =>
      axios
        .get('/wanted_FE_ad-list-data-set.json')
        .then(setFetchDelay(500))
        .then((response: AxiosResponse) => response.data)
    )
}
