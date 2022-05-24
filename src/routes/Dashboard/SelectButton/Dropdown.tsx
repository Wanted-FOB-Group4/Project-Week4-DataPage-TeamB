import { Dispatch, MouseEvent, SetStateAction } from 'react'
import { useSetRecoilState } from 'recoil'

import { selectorState } from 'states/dashBoard'
import styles from './selectButton.module.scss'

interface IProps {
  data: {
    name: string
    title: string
  }[]
  idx: number
  setIsDropdownOpen: Dispatch<SetStateAction<boolean[]>>
}

const Dropdown = ({ data, idx, setIsDropdownOpen }: IProps) => {
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
  return (
    <div className={styles.dropdownBottom}>
      <ul>
        {data.map((item: { name: string; title: string }) => (
          <li key={item.name}>
            <button data-name={item.name} data-title={item.title} type='button' onClick={handleDropdownClick}>
              {item.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Dropdown
