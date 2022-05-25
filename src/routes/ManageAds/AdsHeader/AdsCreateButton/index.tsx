import { useState } from 'react'

import AdsEditFormModal from 'routes/ManageAds/_shared/AdsEditFormModal'

import styles from './adsCreateButton.module.scss'

const AdsEditButton = () => {
  const [isCreateBoxHidden, setIsCreateBoxHidden] = useState(true)

  const handleButtonClick = () => {
    setIsCreateBoxHidden((prevState) => !prevState)
  }

  return (
    <div className={styles.createWrapper}>
      <button type='button' className={styles.createButton} onClick={handleButtonClick}>
        광고 만들기
      </button>
      {!isCreateBoxHidden && <AdsEditFormModal setIsHidden={setIsCreateBoxHidden} />}
    </div>
  )
}

export default AdsEditButton
