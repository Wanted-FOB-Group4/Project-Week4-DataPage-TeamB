import dayjs from 'dayjs'

import { IAds } from 'types/ads'

const getCreateDate = (ads: IAds) => {
  const startDate = dayjs(ads.startDate).format('YYYY-MM-DD')
  if (ads.status === 'active') return startDate
  const endDate = dayjs(ads.endDate).format('YYYY-MM-DD')
  return `${startDate} (${endDate})`
}

export default getCreateDate
