import { useQuery } from 'react-query'
import { useRecoilValue } from 'recoil'

import { adsFilterIndexState } from 'states'
import { getAdListData } from 'services'
import { IAdData } from 'types/ads'

const INIT_DATA: IAdData = {
  count: 0,
  ads: [],
}

export const useFetchAdsQuery = (): IAdData => {
  const adsFilterIndex = useRecoilValue(adsFilterIndexState)

  const { data } = useQuery(['#adsData', adsFilterIndex], () => getAdListData(adsFilterIndex), {
    refetchOnWindowFocus: false,
    staleTime: 60000,
    cacheTime: Infinity,
    suspense: true,
    useErrorBoundary: true,
  })

  return data || INIT_DATA
}
