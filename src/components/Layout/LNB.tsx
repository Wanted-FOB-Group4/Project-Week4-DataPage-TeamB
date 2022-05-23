import { Link, NavLink } from 'react-router-dom'
import cx from 'classnames'

import { DashboardIcon, GuideIcon, ManageAdsIcon } from 'assets/svgs'
import styles from './layout.module.scss'

const GNB = () => {
  return (
    <aside>
      <Link to='/'>LEVER</Link>
      <div>
        <div>서비스</div>
        <div>매드업 드롭다운</div>
      </div>
      <div>
        <div>광고 센터</div>
        <nav className={styles.gnb}>
          <ul>
            <li>
              <NavLink to='dashboard' className={({ isActive }) => cx({ [styles.isActive]: isActive })}>
                <DashboardIcon />
                대시보드
              </NavLink>
            </li>
            <li>
              <NavLink to='manage' className={({ isActive }) => cx({ [styles.isActive]: isActive })}>
                <ManageAdsIcon />
                광고관리
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <Link to='#'>
        <GuideIcon />
        <div>
          <div>레버 이용 가이드</div>
          <div>시작하기 전에 알아보기</div>
        </div>
      </Link>
      <div>
        <div>레버는 함께 만들어갑니다.</div>
        <Link to='#'>이용약관</Link>
      </div>
    </aside>
  )
}

export default GNB
