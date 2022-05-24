import { useFetchAdsQuery, useFilterAds } from 'routes/ManageAds/hooks'

import AdsContainer from './AdsContainer'

import styles from './adsContainers.module.scss'

const AdsContainers = () => {
  useFetchAdsQuery()
  const data = useFilterAds()

  return (
    <ul className={styles.adsContainersWrapper}>
      {data.ads.map((adData) => (
        <AdsContainer key={`ad-container-${adData.id}`} adData={adData} />
      ))}
    </ul>
  )
}

export default AdsContainers
