import { useState, useEffect } from 'react'
import { useRecoilState, useSetRecoilState, useRecoilValue } from 'recoil'
import { useQuery } from 'react-query'
import store from 'store'

import { IAd, IAdData } from 'types/ads'
import { setFetchDelayPromise } from 'utils'
import { adsDataState, adsCurrentIndexState, adsFilterIndexState } from 'states'

import { getAdListData } from 'routes/ManageAds/services'

const STATUS = ['all', 'active', 'ended']

export const useFetchAdsQuery = () => {
  const [adsCurrentIndex, setAdsCurrentIndex] = useRecoilState(adsCurrentIndexState)
  const adsFilterIndex = useRecoilValue(adsFilterIndexState)
  const setAdsData = useSetRecoilState(adsDataState)
  const [filteredData, setFilteredData] = useState<IAdData>({ count: 0, ads: [] })

  const { data } = useQuery(['#adsData', adsCurrentIndex], getAdListData, {
    refetchOnWindowFocus: false,
    cacheTime: 0,
    suspense: true,
    useErrorBoundary: true,
    onSuccess: (successData) => {
      store.set('adsData', successData)
      setAdsData(successData)
      setAdsCurrentIndex(successData.count)
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

    filter.then(setFetchDelayPromise(500)).then((newData) => setFilteredData(newData))
  }, [data, adsFilterIndex])

  return filteredData
}
