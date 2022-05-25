import { Dispatch, MouseEvent, SetStateAction, useRef } from 'react'
import { useClickAway } from 'react-use'
import { useSetRecoilState } from 'recoil'
import cx from 'classnames'

import { selectorState } from 'routes/Dashboard/states/dashBoard'
import styles from './selectButton.module.scss'
import { Circle } from 'assets/svgs'

interface IProps {
  data: {
    name: string
    title: string
  }[]
  idx: number
  setIsDropdownOpen: Dispatch<SetStateAction<boolean[]>>
}

const Dropdown = ({ data, idx, setIsDropdownOpen }: IProps) => {
  const dropdownRef = useRef(null)
  const setSelector = useSetRecoilState(selectorState)
  const handleDropdownClick = (e: MouseEvent<HTMLButtonElement>) => {
    const { name, title } = e.currentTarget.dataset
    setSelector((prev) => {
      return prev.map((item, index) => {
        if (index === idx) return { name: String(name), title: String(title) }
        return item
      })
    })
    setIsDropdownOpen((prev) => {
      return prev.map((value, index) => {
        if (idx === index) return !value
        return value
      })
    })
  }
  useClickAway(dropdownRef, () => {
    setIsDropdownOpen((prev) => {
      return prev.map((value, index) => {
        if (idx === index) return !value
        return value
      })
    })
  })

  return (
    <div className={styles.dropdownBottom} ref={dropdownRef}>
      <ul>
        {data.map((item: { name: string; title: string }) => (
          <li key={item.name}>
            <button data-name={item.name} data-title={item.title} type='button' onClick={handleDropdownClick}>
              <Circle className={cx(styles.colorCircle, styles[item.name])} />
              <span>{item.title}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Dropdown
