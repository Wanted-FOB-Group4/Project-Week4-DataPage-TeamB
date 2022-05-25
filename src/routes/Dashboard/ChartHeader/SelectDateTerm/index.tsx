import { useState, MouseEvent, useRef } from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil'

import styles from './selectDateTerm.module.scss'
import { dateTermState } from '../../states/date'
import { ArrowDownIcon } from 'assets/svgs'
import { useClickAway } from 'react-use'
import { isChartViewState } from 'routes/Dashboard/states/dashBoard'

const SelectDateTerm = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [dateTerm, setDateTerm] = useRecoilState(dateTermState)
  const setIsChartView = useSetRecoilState(isChartViewState)
  const dropdownRef = useRef(null)
  const dropdownValue = dateTerm.title === '주간' ? { title: '일간', value: 1 } : { title: '주간', value: 7 }

  const handleClickDropdownBottom = (e: MouseEvent<HTMLButtonElement>) => {
    const { title, value } = e.currentTarget.dataset
    setDateTerm({
      title: String(title),
      value: Number(value),
    })
    setIsDropdownOpen(false)
    setIsChartView(false)
  }

  const handleClickDropdownTop = () => {
    setIsDropdownOpen((prev) => !prev)
  }

  useClickAway(dropdownRef, () => {
    setIsDropdownOpen(false)
  })

  return (
    <div ref={dropdownRef} className={styles.dateTermContainer}>
      <button type='button' className={styles.dropdownTop} onClick={handleClickDropdownTop}>
        {dateTerm.title}
        <ArrowDownIcon />
      </button>
      {isDropdownOpen && (
        <button
          type='button'
          data-title={dropdownValue.title}
          data-value={dropdownValue.value}
          className={styles.dropdownBottom}
          onClick={handleClickDropdownBottom}
        >
          {dropdownValue.title}
        </button>
      )}
    </div>
  )
}

export default SelectDateTerm
