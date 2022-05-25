import { useState } from 'react'
import cx from 'classnames'

import styles from './table.module.scss'

const TableRow = ({ rowData, channel }: ITableRow) => {
  const [isTotalRow] = useState<boolean>(channel === '총합')

  const { cost, sales, roas, imp, click, ctr, cpc } = rowData

  return (
    <tr className={cx(styles.tablRowWrapper, { [styles.totalRowWrapper]: isTotalRow })}>
      <td className={styles.tableTitle}>{channel}</td>
      <td className={styles.tableCol}>{cost.toLocaleString()}</td>
      <td className={styles.tableCol}>{sales.toLocaleString()}</td>
      <td className={styles.tableCol}>{roas.toLocaleString()}</td>
      <td className={styles.tableCol}>{imp.toLocaleString()}</td>
      <td className={styles.tableCol}>{click.toLocaleString()}</td>
      <td className={styles.tableCol}>{ctr.toLocaleString()}</td>
      <td className={styles.tableCol}>{cpc.toLocaleString()}</td>
    </tr>
  )
}

export default TableRow
