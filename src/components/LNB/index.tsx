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
          <Link to='/'>
            <LogoImage />
          </Link>
        </div>
        <div className={styles.service}>
          <div className={cx(styles.label, 'sub-text')}>서비스</div>
          <Dropdown />
        </div>
        <div>
          <div className={cx(styles.label, 'sub-text')}>광고 센터</div>
          <Navigation />
        </div>
      </div>
      <div>
        <button type='button' className={styles.guide}>
          <div className={styles.iconWrapper}>
            <GuideIcon />
          </div>
          <div className={styles.description}>
            <div className={styles.mainText}>레버 이용 가이드</div>
            <div className='sub-text'>시작하기 전에 알아보기</div>
          </div>
        </button>
        <div className={styles.bottomText}>
          <div className='sub-text'>레버는 함께 만들어갑니다.</div>
          <Link to='#' className='sub-text'>
            이용약관
          </Link>
        </div>
      </div>
    </aside>
  )
}

export default LNB
