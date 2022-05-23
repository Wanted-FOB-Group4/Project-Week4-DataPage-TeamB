import { Link, NavLink } from 'react-router-dom'
import cx from 'classnames'

import { DashboardIcon, GuideIcon, LogoImage, ManageAdsIcon } from 'assets/svgs'
import styles from './layout.module.scss'

const LNB = () => {
  return (
    <aside className={styles.lnb}>
      <div>
        <div className={styles.logoWrapper}>
          <Link to='/'>
            <LogoImage />
          </Link>
        </div>
        <div className={styles.service}>
          <div className={cx(styles.subText, styles.label)}>서비스</div>
          <button type='button'>매드업 드롭다운</button>
        </div>
        <div>
          <div className={cx(styles.subText, styles.label)}>광고 센터</div>
          <nav className={styles.navigation}>
            <ul>
              <li>
                <NavLink to='/' className={({ isActive }) => cx(styles.mainText, { [styles.isActive]: isActive })}>
                  <DashboardIcon />
                  대시보드
                </NavLink>
              </li>
              <li>
                <NavLink to='manage' className={({ isActive }) => cx(styles.mainText, { [styles.isActive]: isActive })}>
                  <ManageAdsIcon />
                  광고관리
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div>
        <button type='button' className={styles.guide}>
          <div className={styles.iconWrapper}>
            <GuideIcon />
          </div>
          <div className={styles.description}>
            <div className={styles.mainText}>레버 이용 가이드</div>
            <div className={styles.subText}>시작하기 전에 알아보기</div>
          </div>
        </button>
        <div className={styles.bottomText}>
          <div className={styles.subText}>레버는 함께 만들어갑니다.</div>
          <Link to='#' className={styles.subText}>
            이용약관
          </Link>
        </div>
      </div>
    </aside>
  )
}

export default LNB
