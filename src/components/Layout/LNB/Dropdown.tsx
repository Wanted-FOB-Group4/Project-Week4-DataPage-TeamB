import { MouseEvent, useRef, useState } from 'react'
import { useClickAway } from 'react-use'
import cx from 'classnames'

import { useRecoil } from 'hooks'
import { currentServiceState, serviceListState } from 'states/service'

import { AddIcon, ArrowDownIcon } from 'assets/svgs'
import styles from './lnb.module.scss'

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [serviceList] = useRecoil(serviceListState)
  const [currentService, setCurrentService] = useRecoil(currentServiceState)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const handleItemClick = (e: MouseEvent<HTMLButtonElement>) => {
    setCurrentService(e.currentTarget.value)
    setIsOpen(false)
  }

  useClickAway(dropdownRef, () => setIsOpen(false))
  return (
    <div className={cx(styles.dropdown, { [styles.open]: isOpen })} ref={dropdownRef}>
      <button type='button' className={cx(styles.select, 'mainText')} onClick={() => setIsOpen((prev) => !prev)}>
        {currentService}
        <ArrowDownIcon />
      </button>
      {isOpen && (
        <div className={styles.content}>
          <ul>
            {serviceList.map((service) => (
              <li key={`service-${service}`}>
                <button type='button' value={service} onClick={handleItemClick}>
                  {service}
                </button>
              </li>
            ))}
          </ul>
          <button type='button' className={styles.addButton}>
            <AddIcon />
            서비스 추가하기
          </button>
        </div>
      )}
    </div>
  )
}

export default Dropdown
