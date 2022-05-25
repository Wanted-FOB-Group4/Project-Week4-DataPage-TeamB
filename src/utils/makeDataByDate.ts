import dayjs from 'dayjs'

import channelData from 'data/media-channel-data-set.json'
import { IMediaDataItem, IMediaDataByDate } from 'types/chart'

export const makeDataByDate = (startDate: string, endDate: string) => {
  const google: IMediaDataByDate[] = []
  const naver: IMediaDataByDate[] = []
  const kakao: IMediaDataByDate[] = []
  const facebook: IMediaDataByDate[] = []

  const startUnix = dayjs(startDate).unix()
  const endUnix = dayjs(endDate).unix()
  channelData.forEach((item: IMediaDataItem) => {
    if (dayjs(item.date).unix() < startUnix || dayjs(item.date).unix() > endUnix) return
    if (item.channel === 'google') {
      google.push({
        ...item,
        conversion: Math.round((item.click * item.cvr) / 100),
        sales: Math.round((item.roas * item.cost) / 100),
      })
    } else if (item.channel === 'naver') {
      naver.push({
        ...item,
        conversion: Math.round((item.click * item.cvr) / 100),
        sales: Math.round((item.roas * item.cost) / 100),
      })
    } else if (item.channel === 'facebook') {
      facebook.push({
        ...item,
        conversion: Math.round((item.click * item.cvr) / 100),
        sales: Math.round((item.roas * item.cost) / 100),
      })
    } else {
      kakao.push({
        ...item,
        conversion: Math.round((item.click * item.cvr) / 100),
        sales: Math.round((item.roas * item.cost) / 100),
      })
    }
  })

  return { google, kakao, naver, facebook }
}
