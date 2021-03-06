import { useRef } from 'react'
import cx from 'classnames'

import TableRow from './TableRow'
import { ITotalChannelData } from 'types/chart'

import styles from './table.module.scss'

interface IProps {
  data: ITotalChannelData
}

const Table = ({ data: tableData }: IProps) => {
  const divRef = useRef<HTMLDivElement>(null)
  const tableRef = useRef<HTMLTableElement>(null)

  const isTableScrolled = () => {
    if (divRef.current && tableRef.current) return divRef.current.offsetWidth < tableRef.current.offsetWidth
    return false
  }

  return (
    <div className={cx({ [styles.tableGradient]: isTableScrolled })}>
      <div className={styles.tableWrapper} ref={divRef}>
        <table className={styles.table} ref={tableRef}>
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
    </div>
  )
}

export default Table
