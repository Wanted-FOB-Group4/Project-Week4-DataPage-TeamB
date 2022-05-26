import TableRow from './TableRow'

import styles from './table.module.scss'
import { ITotalChannelData } from 'types/chart'

interface IProps {
  data: ITotalChannelData
}

const Table = ({ data: tableData }: IProps) => {
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
