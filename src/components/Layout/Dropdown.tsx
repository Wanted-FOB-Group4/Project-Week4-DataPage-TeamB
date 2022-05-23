import { MouseEvent, useRef, useState } from 'react'
import cx from 'classnames'

import { AddIcon, ArrowDownIcon } from 'assets/svgs'
import styles from './layout.module.scss'

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [serviceList, setServiceList] = useState(['매드업', 'MADUP'])
  const [selectedService, setSelectedService] = useState(serviceList[0])
  const dropdownRef = useRef<HTMLDivElement>(null)

  const handleItemClick = (e: MouseEvent<HTMLButtonElement>) => {
    setSelectedService(e.currentTarget.value)
    setIsOpen(false)
  }

  return (
    <div className={cx(styles.dropdown, { [styles.open]: isOpen })}>
      <button type='button' className={cx(styles.select, styles.mainText)} onClick={() => setIsOpen((prev) => !prev)}>
        {selectedService}
        <ArrowDownIcon />
      </button>
      {isOpen && (
        <div className={styles.content} ref={dropdownRef}>
          <ul>
            {serviceList.map((service) => (
              <li key={`service-${service}`}>
                <button type='button' value={service} onClick={handleItemClick}>
                  {service}
                </button>
              </li>
            ))}
          </ul>
          <button type='button' className={styles.add}>
            <AddIcon />
            서비스 추가하기
          </button>
        </div>
      )}
    </div>
  )
}

export default Dropdown
