import { getAdListData } from 'services'
import { useQuery } from 'react-query'

export const useFetchAdsQuery = () => {
  const { data } = useQuery(['#adsData'], getAdListData, {
    refetchOnWindowFocus: false,
    staleTime: 60000,
    cacheTime: Infinity,
  })
}
