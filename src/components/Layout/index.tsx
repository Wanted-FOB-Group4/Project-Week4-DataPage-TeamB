import { Outlet } from 'react-router-dom'

import LNB from './LNB'
import Header from './Header'

import styles from './layout.module.scss'

const Layout = () => {
  return (
    <div className={styles.appContainer}>
      <LNB />
      <div className={styles.mainContainer}>
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default Layout
