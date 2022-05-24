import { LoadingIcon } from 'assets/svgs'
import styles from './loading.module.scss'

const Loading = () => {
  return (
    <div className={styles.loadingWrapper}>
      <LoadingIcon className={styles.loadingIcon} />
      <h1>로딩중...</h1>
    </div>
  )
}

export default Loading
