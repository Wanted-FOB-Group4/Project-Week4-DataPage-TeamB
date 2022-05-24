import { useFetchAdsQuery } from 'hooks'
import AdsContainer from './AdsContainer'

import styles from './adsContainers.module.scss'

const AdsContainers = () => {
  const data = useFetchAdsQuery()
  return (
    <ul className={styles.adsContainersWrapper}>
      {data.ads.map((adData) => (
        <AdsContainer key={`ad-container-${adData.id}`} adData={adData} />
      ))}
    </ul>
  )
}

export default AdsContainers
