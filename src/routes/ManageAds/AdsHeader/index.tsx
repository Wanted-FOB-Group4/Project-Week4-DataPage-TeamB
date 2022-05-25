import { useState } from 'react'

import AdsEditFormModal from 'routes/ManageAds/_shared/AdsEditFormModal'

import AdsFilterDropdown from './AdsFilterDropdown'

import styles from './adsHeader.module.scss'

const AdsHeader = () => {
  const [isCreateBoxHidden, setIsCreateBoxHidden] = useState(true)

  const handleButtonClick = () => {
    setIsCreateBoxHidden((prevState) => !prevState)
  }
  return (
    <div className={styles.adsHeaderWrapper}>
      <AdsFilterDropdown />
      <button type='button' className={styles.createButton} onClick={handleButtonClick}>
        광고 만들기
      </button>
      {!isCreateBoxHidden && <AdsEditFormModal setIsHidden={setIsCreateBoxHidden} />}
    </div>
  )
}

export default AdsHeader
