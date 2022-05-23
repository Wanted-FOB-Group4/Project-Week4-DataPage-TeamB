import { NotiIcon, SettingIcon } from 'assets/svgs'
import ProfileImage from 'assets/images/profile.png'
import styles from './layout.module.scss'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className={styles.header}>
      <ul>
        <li>
          <button type='button'>
            <NotiIcon />
          </button>
        </li>
        <li>
          <Link to='#'>
            <SettingIcon />
          </Link>
        </li>
        <li>
          <Link to='#' className={styles.profile}>
            <img src={ProfileImage} alt='프로필' />
            <span>원티드님</span>
          </Link>
        </li>
      </ul>
    </header>
  )
}

export default Header
