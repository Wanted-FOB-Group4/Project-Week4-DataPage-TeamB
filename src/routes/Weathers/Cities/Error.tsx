import { memo } from 'react'
import styles from './cities.module.scss'

interface Props {
  error: Error
}

const Error = ({ error }: Props) => {
  return <div className={styles.error}>{error.message}</div>
}

export default memo(Error)
