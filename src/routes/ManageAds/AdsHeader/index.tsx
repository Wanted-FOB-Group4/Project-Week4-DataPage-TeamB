import AdsCreateButton from './AdsCreateButton'
import AdsFilterDropdown from './AdsFilterDropdown'

import styles from './adsHeader.module.scss'

const AdsHeader = () => {
  return (
    <div className={styles.adsHeaderWrapper}>
      <AdsFilterDropdown />
      <AdsCreateButton />
    </div>
  )
}

export default AdsHeader
