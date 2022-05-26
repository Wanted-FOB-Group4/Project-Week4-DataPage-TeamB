import { IMediaDataByDate } from 'types/chart'

interface IProps {
  google: IMediaDataByDate[]
  naver: IMediaDataByDate[]
  kakao: IMediaDataByDate[]
  facebook: IMediaDataByDate[]
}

interface IMediaTotalByDateItem {
  cost: number
  sales: number
  roas: number
  click: number
  ctr: number
  cpc: number
  imp: number
  conversion: number
}

const INIT_DATA_ITEM: IMediaTotalByDateItem = {
  cost: 0,
  imp: 0,
  sales: 0,
  roas: 0,
  click: 0,
  ctr: 0,
  cpc: 0,
  conversion: 0,
}

interface IInitData {
  google: IMediaTotalByDateItem
  facebook: IMediaTotalByDateItem
  naver: IMediaTotalByDateItem
  kakao: IMediaTotalByDateItem
  total: IMediaTotalByDateItem

  [key: string]: any
}

export const sumChannelData = ({ google, kakao, naver, facebook }: IProps) => {
  const newData: IInitData = {
    google: { ...INIT_DATA_ITEM },
    facebook: { ...INIT_DATA_ITEM },
    kakao: { ...INIT_DATA_ITEM },
    naver: { ...INIT_DATA_ITEM },
    total: { ...INIT_DATA_ITEM },
  }
  for (let idx = 0; idx < google.length; idx += 1) {
    sumDateByChannel({ data: newData, channel: 'google', item: google[idx] })
    sumDateByChannel({ data: newData, channel: 'naver', item: naver[idx] })
    sumDateByChannel({ data: newData, channel: 'kakao', item: kakao[idx] })
    sumDateByChannel({ data: newData, channel: 'facebook', item: facebook[idx] })
  }
  return newData
}

interface IIProps {
  data: IInitData
  channel: string
  item: IMediaDataByDate
}
const sumDateByChannel = ({ data, channel, item }: IIProps) => {
  if (item === undefined) return
  data[channel].imp += item.imp
  data[channel].cost += item.cost
  data[channel].click += item.click
  data[channel].roas += item.roas
  data[channel].ctr += item.ctr
  data[channel].cpc += item.cpc
  data[channel].conversion += item.conversion
  data[channel].sales += item.sales
  data.total.imp += item.imp
  data.total.cost += item.cost
  data.total.click += item.click
  data.total.roas += item.roas
  data.total.ctr += item.ctr
  data.total.cpc += item.cpc
  data.total.conversion += item.conversion
  data.total.sales += item.sales
}
