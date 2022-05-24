import { useQuery } from 'react-query'
import { useRecoilState } from 'recoil'

import { adsCurrentIndexState } from 'states'
import { getAdListData } from 'routes/ManageAds/services'
import { IAdData } from 'types/ads'

const INIT_DATA: IAdData = {
  count: 0,
  ads: [],
}

export const useFetchAdsQuery = (): IAdData => {
  const [adsCurrentIndex, setAdsCurrentIndex] = useRecoilState(adsCurrentIndexState)

  const { data } = useQuery(['#adsData', adsCurrentIndex], getAdListData, {
    refetchOnWindowFocus: false,
    cacheTime: 0,
    suspense: true,
    useErrorBoundary: true,
    onSuccess: (successData) => {
      store.set('adsData', successData)
      setAdsCurrentIndex(successData.count)
    },
  })
  return data || INIT_DATA
}
