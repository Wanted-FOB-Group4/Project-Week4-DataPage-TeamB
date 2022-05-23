import { IAds } from 'types/ads'

const getAdsTitle = (ads: IAds) => {
  if (ads.adType === 'web') return `웹광고_${ads.title}`
  return `앱광고_${ads.title}`
}

export default getAdsTitle
