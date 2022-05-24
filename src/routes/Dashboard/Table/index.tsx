import { useQuery } from 'react-query'
import { getMediaChannelData } from 'services/getMediaChannalData'

const Table = ({ date }: IDate) => {
  const { data } = useQuery(['#mediaChannelData', date], () => getMediaChannelData(date.start, date.end), {
    refetchOnWindowFocus: false,
    staleTime: 60000,
    cacheTime: Infinity,
    suspense: true,
    useErrorBoundary: true,
  })

  return (
    <div>
      <div>
        <span>광고비</span>
        <span>매출</span>
        <span>ROAS</span>
        <span>노출수</span>
        <span>클릭 수</span>
        <span>클릭률 (CTR)</span>
        <span>클릭당비용 (CPC)</span>
      </div>
    </div>
  )
}

export default Table
