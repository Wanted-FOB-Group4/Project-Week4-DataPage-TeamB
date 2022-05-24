import { adsDataState } from '../../../states/adsDataState'
import { useQuery } from 'react-query'
import { useRecoilState, useSetRecoilState } from 'recoil'
import store from 'store'

import { adsCurrentIndexState } from 'states'
import { getAdListData } from 'routes/ManageAds/services'

export const useFetchAdsQuery = () => {
  const [adsCurrentIndex, setAdsCurrentIndex] = useRecoilState(adsCurrentIndexState)
  const setAdsData = useSetRecoilState(adsDataState)

  useQuery(['#adsData', adsCurrentIndex], getAdListData, {
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
}
