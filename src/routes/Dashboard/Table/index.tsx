import { useQuery } from 'react-query'
import { useMount } from 'react-use'
import { getMediaChannelData } from 'services/getMediaChannalData'

import styles from './table.module.scss'
import TableRow from './TableRow'

const Table = ({ date }: IDate) => {
  const { data } = useQuery(['#mediaChannelData', date], () => getMediaChannelData(date.start, date.end), {
    refetchOnWindowFocus: false,
    staleTime: 60000,
    cacheTime: Infinity,
    suspense: true,
    useErrorBoundary: true,
  })

  useMount(() => {
    console.log(data)
  })

  return (
    <div>
      <table className={styles.tableContainer}>
        <tr className={styles.tableHeader}>
          <th className={styles.tableTitle}> </th>
          <th>광고비</th>
          <th>매출</th>
          <th>ROAS</th>
          <th>노출수</th>
          <th>클릭 수</th>
          <th>클릭률 (CTR)</th>
          <th>클릭당비용 (CPC)</th>
        </tr>
      </table>
    </div>
  )
}

export default Table
