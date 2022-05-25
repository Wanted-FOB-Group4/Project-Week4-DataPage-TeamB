import { IMediaDataItem, IMediaDataByDate } from 'types/chart'

export const makeChannelData = (apiData: IMediaChannelData[]) => {
  const google: IMediaDataByDate[] = []
  const naver: IMediaDataByDate[] = []
  const kakao: IMediaDataByDate[] = []
  const facebook: IMediaDataByDate[] = []

  apiData.forEach((item: IMediaDataItem) => {
    if (item.channel === 'google') {
      google.push({
        ...item,
        conversion: Math.round((item.click * item.cvr) / 100),
        sales: Math.round((item.roas * item.cost) / 100),
      })
      return
    }
    if (item.channel === 'naver') {
      naver.push({
        ...item,
        conversion: Math.round((item.click * item.cvr) / 100),
        sales: Math.round((item.roas * item.cost) / 100),
      })
      return
    }
    if (item.channel === 'facebook') {
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
