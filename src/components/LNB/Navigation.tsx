import { NavLink } from 'react-router-dom'
import cx from 'classnames'

import { DashboardIcon, ManageAdsIcon } from 'assets/svgs'
import styles from './lnb.module.scss'

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <ul>
        <li>
          <NavLink to='/' className={({ isActive }) => cx('mainText', { [styles.isActive]: isActive })}>
            <DashboardIcon />
            대시보드
          </NavLink>
        </li>
        <li>
          <NavLink to='manage' className={({ isActive }) => cx('mainText', { [styles.isActive]: isActive })}>
            <ManageAdsIcon />
            광고관리
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
