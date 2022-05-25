import { useState, useEffect } from 'react'
import axios, { AxiosResponse } from 'axios'
import { useRecoilState, useRecoilValue } from 'recoil'
import { useQuery } from 'react-query'
import store from 'store'

import { IAd, IAdData } from 'routes/ManageAds/types'
import { adsDataState, adsFilterIndexState } from 'routes/ManageAds/states'
import { setFetchDelay, setFetchDelayPromise } from 'utils'

const STATUS = ['all', 'active', 'ended']

const getAdListData = () => {
  const promise = new Promise((resolve: (value: IAdData) => void, reject) => {
    const data: IAdData = store.get('adsData')
    if (!data) reject()
    else resolve(data)
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

export const useFetchAdsQuery = () => {
  const adsFilterIndex = useRecoilValue(adsFilterIndexState)
  const [adsData, setAdsData] = useRecoilState(adsDataState)
  const [filteredData, setFilteredData] = useState<IAdData>({ count: 0, ads: [] })

  const { data, refetch } = useQuery(['#adsData', adsData.count], getAdListData, {
    refetchOnWindowFocus: false,
    cacheTime: 0,
    suspense: true,
    useErrorBoundary: true,
    onSuccess: (successData) => {
      store.set('adsData', successData)
      setAdsData(successData)
    },
  })

  useEffect(() => {
    const filter = new Promise<IAdData>((resolve) => {
      if (adsFilterIndex === 0) resolve(data)
      const newData: IAdData = {
        count: 0,
        ads: [],
      }
      newData.ads = data.ads.filter((ad: IAd) => ad.status === STATUS[adsFilterIndex])
      newData.count = newData.ads.length
      resolve(newData)
    })

    filter.then((newData) => setFilteredData(newData))
  }, [data, adsFilterIndex])

  useEffect(() => {
    refetch()
  }, [adsData, refetch])

  return filteredData
}
