import { getAdListData } from 'services'
import { useQuery } from 'react-query'
import { IAdData } from 'types/ads'

export const useFetchAdsQuery = (): IAdData => {
  const { data } = useQuery(['#adsData'], getAdListData, {
    refetchOnWindowFocus: false,
    staleTime: 60000,
    cacheTime: Infinity,
    suspense: true,
    useErrorBoundary: true,
  })
  return data
}
