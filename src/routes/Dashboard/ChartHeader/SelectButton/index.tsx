import { useState, MouseEvent } from 'react'
import { useRecoilValue } from 'recoil'
import cx from 'classnames'

import { selectorState } from '../../states/dashBoard'
import Dropdown from './Dropdown'
import { Circle, ArrowDownIcon } from 'assets/svgs'
import styles from './selectButton.module.scss'

const MENU = [
  { name: 'roas', title: 'ROAS' },
  { name: 'cost', title: '광고비' },
  { name: 'imp', title: '노출 수' },
  { name: 'click', title: '클릭 수' },
  { name: 'conversion', title: '전환 수' },
  { name: 'sales', title: '매출' },
]

const SelectButton = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState([false, false])
  const selectors = useRecoilValue(selectorState)
  const firstMenu = MENU.filter((item) => selectors[1].name === '' || item.name !== selectors[1].name)
  const secondMenu = MENU.filter((item) => item.name !== selectors[0].name)
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
          <Circle className={cx(styles.colorCircle, styles[selectors[0].name])} /> {selectors[0].title || '선택'}{' '}
          <ArrowDownIcon />
        </button>
        {isDropdownOpen[0] && <Dropdown data={firstMenu} idx={0} setIsDropdownOpen={setIsDropdownOpen} />}
      </div>
      <div className={styles.selectBtnBox}>
        <button className={styles.dropdownTop} data-id={1} type='button' onClick={handleClick} disabled={!selectors[0]}>
          <Circle className={cx(styles.colorCircle, styles[selectors[1].name])} /> {selectors[1].title || '선택'}{' '}
          <ArrowDownIcon />
        </button>
        {isDropdownOpen[1] && <Dropdown data={secondMenu} idx={1} setIsDropdownOpen={setIsDropdownOpen} />}
      </div>
    </div>
  )
}

export default SelectButton
