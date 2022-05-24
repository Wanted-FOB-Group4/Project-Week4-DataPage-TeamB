import { useState, MouseEvent } from 'react'
import { useRecoilValue } from 'recoil'

import styles from './selectButton.module.scss'
import { selectorState } from 'states/dashBoard'
import Dropdown from './Dropdown'

const MENU = ['ROAS', '광고비', '노출 수', '클릭 수', '전환 수', '매출']

const SelectButton = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState([false, false])
  const selectors = useRecoilValue(selectorState)
  const secondMenu = MENU.filter((item) => item !== selectors[0])
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    const { id } = e.currentTarget.dataset
    setIsDropdownOpen((prev) => {
      return prev.map((isOpen, idx) => {
        if (idx === Number(id)) return !isOpen
        return isOpen
      })
    })
  }
  return (
    <div className={styles.selectBtnContainer}>
      <div className={styles.selectBtnBox}>
        <button className={styles.dropdownTop} data-id={0} type='button' onClick={handleClick}>
          {selectors[0] || '선택'}
        </button>
        {isDropdownOpen[0] && <Dropdown data={MENU} idx={0} setIsDropdownOpen={setIsDropdownOpen} />}
      </div>
      <div className={styles.selectBtnBox}>
        <button className={styles.dropdownTop} data-id={1} type='button' onClick={handleClick} disabled={!selectors[0]}>
          {selectors[1] || '선택'}
        </button>
        {isDropdownOpen[1] && <Dropdown data={secondMenu} idx={1} setIsDropdownOpen={setIsDropdownOpen} />}
      </div>
    </div>
  )
}

export default SelectButton
