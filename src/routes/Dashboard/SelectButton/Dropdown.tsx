import { Dispatch, MouseEvent, SetStateAction } from 'react'
import { useSetRecoilState } from 'recoil'

import { selectorState } from 'states/dashBoard'
import styles from './selectButton.module.scss'

interface IProps {
  data: string[]
  idx: number
  setIsDropdownOpen: Dispatch<SetStateAction<boolean[]>>
}

const Dropdown = ({ data, idx, setIsDropdownOpen }: IProps) => {
  const setSelector = useSetRecoilState(selectorState)
  const handleDropdownClick = (e: MouseEvent<HTMLButtonElement>) => {
    const { name } = e.currentTarget.dataset
    setSelector((prev) => {
      return prev.map((item, index) => {
        if (index === idx) return String(name)
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
  return (
    <div className={styles.dropdownBottom}>
      <ul>
        {data.map((item) => (
          <li key={item}>
            <button data-name={item} type='button' onClick={handleDropdownClick}>
              {item}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Dropdown
