import { Link } from 'react-router-dom'

import { NotiIcon, SettingIcon } from 'assets/svgs'
import ProfileImage from 'assets/images/profile.png'
import styles from './layout.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <ul>
        <li>
          <button type='button' className={styles.notification} aria-label='notification'>
            <NotiIcon />
          </button>
        </li>
        <li>
          <button type='button' aria-label='notification'>
            <SettingIcon />
          </button>
        </li>
        <li>
          <Link to='#' className={styles.profile}>
            <img src={ProfileImage} alt='profile' />
            <span>원티드님</span>
          </Link>
        </li>
      </ul>
    </header>
  )
}

export default Header
