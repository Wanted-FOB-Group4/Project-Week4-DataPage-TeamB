import { Dispatch } from 'react'

import styles from './adsEditFormInput.module.scss'

interface IProps {
  value: boolean
  setValue: Dispatch<boolean>
}

const AD_TYPE_WEB = false
const AD_TYPE_APP = true

const AdsEditFormAdTypeIput = ({ value, setValue }: IProps) => {
  const handleAdTypeWebChange = () => setValue(AD_TYPE_WEB)
  const handleAdTypeAppChange = () => setValue(AD_TYPE_APP)

  return (
    <li className={styles.editList}>
      <label htmlFor='adType' className={styles.inputLabel}>
        광고 타입
      </label>
      <div className={styles.radioInput}>
        <input
          name='adType'
          id='radioWeb'
          type='radio'
          checked={value === AD_TYPE_WEB}
          onChange={handleAdTypeWebChange}
        />
        <label htmlFor='radioWeb' className={styles.checkBoxLabel}>
          웹 광고
        </label>
        <input
          name='adType'
          id='radioApp'
          type='radio'
          checked={value === AD_TYPE_APP}
          onChange={handleAdTypeAppChange}
        />
        <label htmlFor='radioApp' className={styles.checkBoxLabel}>
          앱 광고
        </label>
      </div>
    </li>
  )
}

export default AdsEditFormAdTypeIput
