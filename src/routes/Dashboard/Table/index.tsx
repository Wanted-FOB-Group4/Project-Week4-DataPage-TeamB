import { useQuery } from 'react-query'
import { useMount } from 'react-use'
import { getMediaChannelData } from 'services/getMediaChannalData'

import TableRow from './TableRow'

import styles from './table.module.scss'

const Table = ({ date }: IDate) => {
  const { data: tableData } = useQuery(['#mediaChannelData', date], () => getMediaChannelData(date.start, date.end), {
    refetchOnWindowFocus: false,
    staleTime: 60000,
    cacheTime: Infinity,
    suspense: true,
    useErrorBoundary: true,
  })

  useMount(() => {
    console.log(tableData)
  })

  return (
    <div>
      <table className={styles.tableContainer}>
        <thead className={styles.tableHeader}>
          <tr className={styles.tablRowWrapper}>
            <th className={styles.tableTitle}> </th>
            <th>광고비</th>
            <th>매출</th>
            <th>ROAS</th>
            <th>노출수</th>
            <th>클릭 수</th>
            <th>클릭률 (CTR)</th>
            <th>클릭당비용 (CPC)</th>
          </tr>
        </thead>
        <tbody>
          <TableRow channel='facebook' rowData={tableData!.facebook} />
          <TableRow channel='naver' rowData={tableData!.naver} />
          <TableRow channel='google' rowData={tableData!.google} />
          <TableRow channel='kakao' rowData={tableData!.kakao} />
          <TableRow channel='총합' rowData={tableData!.total} />
        </tbody>
      </table>
    </div>
  )
}

export default Table
