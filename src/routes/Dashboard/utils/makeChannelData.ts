import { IMediaDataItem, IMediaDataByDate } from 'types/chart'

interface InitData {
  google: IMediaDataByDate[]
  facebook: IMediaDataByDate[]
  naver: IMediaDataByDate[]
  kakao: IMediaDataByDate[]

  [key: string]: any
}

export const makeChannelData = (apiData: IMediaChannelData[]) => {
  const newData: InitData = {
    google: [],
    facebook: [],
    kakao: [],
    naver: [],
  }

  apiData.forEach((item: IMediaDataItem) => {
    newData[item.channel].push({
      ...item,
      conversion: Math.round((item.click * item.cvr) / 100),
      sales: Math.round((item.roas * item.cost) / 100),
    })
  })
  const { google, kakao, naver, facebook } = newData

  return { google, kakao, naver, facebook }
}
