import { useState } from 'react'
import cx from 'classnames'

import { FacebookIcon, GoogleIcon, KakaoIcon, NaverIcon } from 'assets/svgs'
import styles from './table.module.scss'

interface IInitData {
  페이스북: JSX.Element
  카카오: JSX.Element
  네이버: JSX.Element
  구글: JSX.Element

  [key: string]: any
}

const TableRow = ({ rowData, channel }: ITableRow) => {
  const [isTotalRow] = useState<boolean>(channel === '총합')
  const logoIcon: IInitData = {
    페이스북: <FacebookIcon />,
    카카오: <KakaoIcon />,
    네이버: <NaverIcon />,
    구글: <GoogleIcon />,
  }
  const { cost, sales, roas, imp, click, ctr, cpc } = rowData

  return (
    <tr className={cx(styles.tablRowWrapper, { [styles.totalRowWrapper]: isTotalRow })}>
      <td className={styles.tableTitle}>
        <span className={styles.tableLogo}>{logoIcon[channel]}</span>
        <span className={styles.tableTitleText}>{channel}</span>
      </td>
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
