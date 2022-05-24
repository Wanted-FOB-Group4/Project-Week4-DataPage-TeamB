import { useQuery } from 'react-query'
import { useRecoilValue, useSetRecoilState } from 'recoil'

import { adsCurrentIndexState, adsFilterIndexState } from 'states'
import { getAdListData } from 'services'
import { IAdData } from 'types/ads'

const INIT_DATA: IAdData = {
  count: 0,
  ads: [],
}

export const useFetchAdsQuery = (): IAdData => {
  const adsFilterIndex = useRecoilValue(adsFilterIndexState)
  const setAdsCurrentIndex = useSetRecoilState(adsCurrentIndexState)

  const { data } = useQuery(['#adsData', adsFilterIndex], () => getAdListData(adsFilterIndex), {
    refetchOnWindowFocus: false,
    staleTime: 60000,
    cacheTime: Infinity,
    suspense: true,
    useErrorBoundary: true,
    onSuccess: (successData) => {
      setAdsCurrentIndex(successData.count)
    },
  })
  return data || INIT_DATA
}
