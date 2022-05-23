import { useFetchAdsQuery } from 'hooks'
import AdsContainer from './AdsContainer'

const AdsContainers = () => {
  const data = useFetchAdsQuery()
  return (
    <>
      {data.ads.map((adData) => (
        <AdsContainer key={`ad-container-${adData.id}`} adData={adData} />
      ))}
    </>
  )
}

export default AdsContainers
