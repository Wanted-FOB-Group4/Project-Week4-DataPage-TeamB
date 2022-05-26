import { useQuery } from 'react-query'
import { useRecoilValue } from 'recoil'

import { dateRangeState } from '../states/date'
import { IMediaTotalByDateItem, ITotalChannelData } from 'types/chart'
import { getMediaChannelData } from 'services/getMediaChannalData'

const INIT_ITEM: IMediaTotalByDateItem = {
  cost: 0,
  sales: 0,
  roas: 0,
  click: 0,
  ctr: 0,
  cpc: 0,
  imp: 0,
  conversion: 0,
}

const INIT: ITotalChannelData = {
  google: INIT_ITEM,
  naver: INIT_ITEM,
  kakao: INIT_ITEM,
  facebook: INIT_ITEM,
  total: INIT_ITEM,
}
export const useFetchMediaQuery = (): ITotalChannelData => {
  const { from, to } = useRecoilValue(dateRangeState)

  const { data } = useQuery(['#totalChannelData', [from, to]], () => getMediaChannelData(from, to), {
    refetchOnWindowFocus: false,
    staleTime: 60000,
    cacheTime: Infinity,
    suspense: true,
    useErrorBoundary: true,
  })

  return data || INIT
}
