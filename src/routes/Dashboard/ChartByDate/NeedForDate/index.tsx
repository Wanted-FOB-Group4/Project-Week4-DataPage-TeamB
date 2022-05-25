import { ErrorIcon } from 'assets/svgs'
import styles from './needMoreDate.module.scss'

const NeedMoreDate = () => {
  return (
    <div className={styles.needMoreDateContainer}>
      <ErrorIcon className={styles.errorIcon} />
      <div className={styles.errorMessage}>주간으로 선택하실 경우 기간을 20일 이상 선택하셔야 합니다.</div>
    </div>
  )
}

export default NeedMoreDate
