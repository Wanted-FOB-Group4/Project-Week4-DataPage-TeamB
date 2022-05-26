import { DeadFaceIcon } from 'assets/svgs'
import styles from './errorMessage.module.scss'

interface IProps {
  error: Error
}

const ErrorMessage = ({ error }: IProps) => {
  return (
    <div className={styles.errorWrapper}>
      <DeadFaceIcon className={styles.errorIcon} />
      <h3>{error.message}</h3>
    </div>
  )
}

export default ErrorMessage
