import { Link } from 'react-router-dom'
import cx from 'classnames'

import Dropdown from './Dropdown'
import Navigation from './Navigation'

import { GuideIcon, LogoImage } from 'assets/svgs'
import styles from './lnb.module.scss'

const LNB = () => {
  return (
    <aside className={styles.lnb}>
      <div>
        <div className={styles.logoWrapper}>
          <Link to='/' aria-label='logo'>
            <LogoImage />
          </Link>
        </div>
        <div className={styles.service}>
          <div className={cx(styles.label, 'subText')}>서비스</div>
          <Dropdown />
        </div>
        <div>
          <div className={cx(styles.label, 'subText')}>광고 센터</div>
          <Navigation />
        </div>
      </div>
      <div>
        <button type='button' className={styles.guide}>
          <div className={styles.iconWrapper}>
            <GuideIcon />
          </div>
          <div className={styles.description}>
            <div className='mainText'>레버 이용 가이드</div>
            <div className='subText'>시작하기 전에 알아보기</div>
          </div>
        </button>
        <div className={styles.bottomText}>
          <div className='subText'>레버는 함께 만들어갑니다.</div>
          <Link to='#' className='subText'>
            이용약관
          </Link>
        </div>
      </div>
    </aside>
  )
}

export default LNB
