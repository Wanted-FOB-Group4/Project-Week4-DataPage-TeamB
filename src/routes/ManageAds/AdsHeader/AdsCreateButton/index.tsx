import { useState, useRef } from 'react'
import { useClickAway } from 'react-use'

import AdsCreateContainer from 'routes/ManageAds/_shared/AdsCreateContainer'

import styles from './adsCreateButton.module.scss'

const AdsCreateButton = () => {
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
      {!isCreateBoxHidden && <AdsCreateContainer setIsHidden={setIsCreateBoxHidden} />}
    </div>
  )
}

export default AdsCreateButton
