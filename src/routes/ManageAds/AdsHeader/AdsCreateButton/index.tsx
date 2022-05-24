import { useState, useRef } from 'react'
import { useClickAway } from 'react-use'
import { cx } from 'styles'
import styles from './adsCreateButton.module.scss'
import AdsCreateForm from './AdsCreateForm'

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
      <div className={cx(styles.createBox, { [styles.isCreateBoxHidden]: isCreateBoxHidden })}>
        <h2>새 광고</h2>
        <AdsCreateForm />
      </div>
    </div>
  )
}

export default AdsCreateButton
