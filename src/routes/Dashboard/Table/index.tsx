import { useQuery } from 'react-query'
import { useRecoilValue } from 'recoil'
import { dateRangeState } from '../states/date'
import { getMediaChannelData } from 'services/getMediaChannalData'

import TableRow from './TableRow'

import styles from './table.module.scss'

const Table = () => {
  const date = useRecoilValue(dateRangeState)

  const { data: tableData } = useQuery(['#mediaChannelData', date], () => getMediaChannelData(date.from, date.to), {
    refetchOnWindowFocus: false,
    staleTime: 60000,
    cacheTime: Infinity,
    suspense: true,
    useErrorBoundary: true,
  })

  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <thead className={styles.tableHeader}>
          <tr className={styles.tablRowWrapper}>
            <th className={styles.tableTitle}> </th>
            <th className={styles.tableCol}>광고비</th>
            <th className={styles.tableCol}>매출</th>
            <th className={styles.tableCol}>ROAS</th>
            <th className={styles.tableCol}>노출수</th>
            <th className={styles.tableCol}>클릭 수</th>
            <th className={styles.tableCol}>클릭률 (CTR)</th>
            <th className={styles.tableCol}>클릭당비용 (CPC)</th>
          </tr>
        </thead>
        <tbody>
          <TableRow channel='페이스북' rowData={tableData!.facebook} />
          <TableRow channel='네이버' rowData={tableData!.naver} />
          <TableRow channel='구글' rowData={tableData!.google} />
          <TableRow channel='카카오' rowData={tableData!.kakao} />
          <TableRow channel='총합' rowData={tableData!.total} />
        </tbody>
      </table>
    </div>
  )
}

export default Table
