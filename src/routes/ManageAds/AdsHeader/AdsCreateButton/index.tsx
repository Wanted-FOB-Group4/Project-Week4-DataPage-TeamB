import { useState, useRef } from 'react'
import { useClickAway } from 'react-use'

import AdsEditFormContainer from 'routes/ManageAds/_shared/AdsEditFormContainer'

import styles from './adsCreateButton.module.scss'

const AdsEditButton = () => {
  const [isCreateBoxHidden, setIsCreateBoxHidden] = useState(true)
  const buttonRef = useRef(null)

  const handleClickAway = () => {
    setIsCreateBoxHidden(true)
  }

  const handleButtonClick = () => {
    setIsCreateBoxHidden((prevState) => !prevState)
  }

  useClickAway(buttonRef, handleClickAway)
  return (
    <div className={styles.createWrapper} ref={buttonRef}>
      <button type='button' className={styles.createButton} onClick={handleButtonClick}>
        광고 만들기
      </button>
      {!isCreateBoxHidden && <AdsEditFormContainer setIsHidden={setIsCreateBoxHidden} />}
    </div>
  )
}

export default AdsEditButton
