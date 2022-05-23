import { useRef, useState } from 'react'
import { useRecoilState } from 'recoil'
import { useClickAway } from 'react-use'
import cx from 'classnames'

import { adsFilterIndexState } from 'states'

import { ArrowDown } from 'assets/svgs'
import styles from './adsFilterDropdown.module.scss'

const DROPDOWN_KEYWORDS = ['전체 광고', '진행중인 광고', '중단된 광고']

const AdsFilterDropdown = () => {
  const [adsFilterIndex, setAdsFilterIndex] = useRecoilState(adsFilterIndexState)
  const [isDropdownHidden, setIsDropdownHidden] = useState(true)
  const dropdownRef = useRef(null)

  const handleClickAway = () => {
    setIsDropdownHidden(true)
  }

  const handleButtonClick = () => {
    setIsDropdownHidden((prevState) => !prevState)
  }

  const handleListClick = (i: number) => {
    setAdsFilterIndex(i)
    setIsDropdownHidden(true)
  }

  useClickAway(dropdownRef, handleClickAway)

  return (
    <div className={styles.dropdownWrapper} ref={dropdownRef}>
      <button type='button' className={styles.dropdownButton} onClick={handleButtonClick}>
        <span>{DROPDOWN_KEYWORDS[adsFilterIndex]}</span>
        <ArrowDown className={styles.dropdownIcon} />
      </button>
      <ul className={cx(styles.dropdownBottom, { [styles.isDropdownHidden]: isDropdownHidden })}>
        {DROPDOWN_KEYWORDS.map((v, i) => {
          const key = `dropdown-${i}`
          return (
            <li key={key}>
              <button type='button' onClick={() => handleListClick(i)}>
                {v}
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default AdsFilterDropdown
