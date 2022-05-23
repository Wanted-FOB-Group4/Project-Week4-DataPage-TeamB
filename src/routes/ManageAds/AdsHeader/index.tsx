import styles from './adsHeader.module.scss'

const AdsHeader = () => {
  return (
    <div className={styles.adsHeaderWrapper}>
      <div>전체 광고</div>
      <button type='button' className={styles.addAdsButton}>
        광고 만들기
      </button>
    </div>
  )
}

export default AdsHeader
