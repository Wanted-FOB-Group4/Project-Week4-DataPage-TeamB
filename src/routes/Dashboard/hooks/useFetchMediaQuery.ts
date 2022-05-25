import { useQuery } from 'react-query'
import { useRecoilValue } from 'recoil'

import { getMediaChannelData } from 'services/getMediaChannelData'
import { dateState } from '../states/date'
import { IMediaTotalByDateItem, ITotalChannelData } from 'types/chart'

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
  const date = useRecoilValue(dateState)

  const { data } = useQuery(['#totalChannelData', date], () => getMediaChannelData(date[0], date[1]), {
    refetchOnWindowFocus: false,
    staleTime: 60000,
    cacheTime: Infinity,
    suspense: true,
    useErrorBoundary: true,
  })

  return data || INIT
}
