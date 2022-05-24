import styles from './adsCreateFormInput.module.scss'

interface IProps {
  value: boolean
  setValue: React.Dispatch<boolean>
}

const AD_TYPE_WEB = true
const AD_TYPE_APP = false

const AdsCreateFormAdTypeIput = ({ value, setValue }: IProps) => {
  const handleAdTypeWebChange = () => setValue(AD_TYPE_WEB)
  const handleAdTypeAppChange = () => setValue(AD_TYPE_APP)

  return (
    <li className={styles.createList}>
      <label htmlFor='adType'>광고 타입</label>
      <div className={styles.radioInput}>
        <input
          name='adType'
          id='radioWeb'
          type='radio'
          className={styles.radioWeb}
          checked={value === AD_TYPE_WEB}
          onChange={handleAdTypeWebChange}
        />
        <label htmlFor='radioWeb'>웹 광고</label>
        <input
          name='adType'
          id='radioApp'
          type='radio'
          className={styles.radioApp}
          checked={value === AD_TYPE_APP}
          onChange={handleAdTypeAppChange}
        />
        <label htmlFor='radioApp'>앱 광고</label>
      </div>
    </li>
  )
}

export default AdsCreateFormAdTypeIput
