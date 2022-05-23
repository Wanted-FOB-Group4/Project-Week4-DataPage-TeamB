import { NotiIcon, SettingIcon } from 'assets/svgs'
import ProfileImage from 'assets/images/profile.png'
import styles from './layout.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <button type='button'>
        <NotiIcon />
      </button>
      <button type='button'>
        <SettingIcon />
      </button>
      <button type='button'>
        <img src={ProfileImage} alt='프로필' />
        <span>원티드님</span>
      </button>
    </header>
  )
}

export default Header
