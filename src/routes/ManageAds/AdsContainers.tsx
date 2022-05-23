import { useFetchAdsQuery } from 'hooks'
import { AdsContainer } from './AdsContainer'
import { IAd } from 'types/ads'

const TEST_DATA: IAd = {
  id: 2,
  adType: 'web',
  title: '매드업 레버 광고 12345',
  budget: 1111111110,
  status: 'ended',
  startDate: '2021-01-22T00:00:00',
  endDate: '2021-12-21T23:59:59',
  report: {
    cost: 169837362,
    convValue: 745438798,
    roas: 438,
  },
}

const AdsContainers = () => {
  const data = useFetchAdsQuery()
  console.log(data)
  return (
    <>
      {data.ads.map((adData: IAd) => (
        <AdsContainer key={`ad-container-${adData.id}`} adData={adData} />
      ))}
    </>
  )
}

export default AdsContainers
