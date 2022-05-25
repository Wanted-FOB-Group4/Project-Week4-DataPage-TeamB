import { useFetchAdsQuery } from 'routes/ManageAds/hooks'
import AdsContainer from './AdsContainer'

import styles from './adsContainers.module.scss'

const AdsContainers = () => {
  const filteredData = useFetchAdsQuery()

  return (
    <ul className={styles.adsContainersWrapper}>
      {filteredData.ads.map((adData) => (
        <AdsContainer key={`ad-container-${adData.id}`} adData={adData} />
      ))}
    </ul>
  )
}

export default AdsContainers
