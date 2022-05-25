import { useState } from 'react'
import cx from 'classnames'

import styles from './table.module.scss'

const TableRow = ({ rowData, channel }: ITableRow) => {
  const [isTotalRow] = useState<boolean>(channel === '총합')

  const { cost, sales, roas, imp, click, ctr, cpc } = rowData

  return (
    <tr className={cx(styles.tablRowWrapper, { [styles.totalRowWrapper]: isTotalRow })}>
      <td className={styles.tableTitle}>{channel}</td>
      <td>{cost.toLocaleString()}</td>
      <td>{sales.toLocaleString()}</td>
      <td>{roas.toLocaleString()}</td>
      <td>{imp.toLocaleString()}</td>
      <td>{click.toLocaleString()}</td>
      <td>{ctr.toLocaleString()}</td>
      <td>{cpc.toLocaleString()}</td>
    </tr>
  )
}

export default TableRow
