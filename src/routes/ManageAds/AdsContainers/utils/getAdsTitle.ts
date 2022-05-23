const getAdsTitle = (title: string, type: string) => {
  if (type === 'web') return `웹광고_${title}`
  return `앱광고_${title}`
}

export default getAdsTitle
