import { IMediaDataByDate } from 'types/types.d'

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

interface IMediaTotalByDate {
  google: IMediaTotalByDateItem
  naver: IMediaTotalByDateItem
  kakao: IMediaTotalByDateItem
  facebook: IMediaTotalByDateItem
  total: IMediaTotalByDateItem
}

const INIT_DATA_ITEM = {
  cost: 0,
  imp: 0,
  sales: 0,
  roas: 0,
  click: 0,
  ctr: 0,
  cpc: 0,
  naver: 0,
  conversion: 0,
}
const INIT_DATA = {
  google: { ...INIT_DATA_ITEM },
  facebook: { ...INIT_DATA_ITEM },
  kakao: { ...INIT_DATA_ITEM },
  naver: { ...INIT_DATA_ITEM },
  total: { ...INIT_DATA_ITEM },
}

export const makeDateSumData = ({ google, kakao, naver, facebook }: IProps) => {
  const newData: IMediaTotalByDate = INIT_DATA
  for (let idx = 0; idx < google.length; idx += 1) {
    sumDateByChannel({ data: newData, channel: 'google', item: google[idx] })
    sumDateByChannel({ data: newData, channel: 'naver', item: naver[idx] })
    sumDateByChannel({ data: newData, channel: 'kakao', item: kakao[idx] })
    sumDateByChannel({ data: newData, channel: 'facebook', item: facebook[idx] })
  }
  return newData
}

interface IIProps {
  data: IMediaTotalByDate
  channel: string
  item: IMediaDataByDate
}
const sumDateByChannel = ({ data, channel, item }: IIProps) => {
  if (channel === 'google') {
    data.google.imp += item.imp
    data.google.cost += item.cost
    data.google.click += item.click
    data.google.ctr += item.ctr
    data.google.cpc += item.cpc
    data.google.conversion += item.conversion
    data.google.sales += item.sales
  } else if (channel === 'naver') {
    data.naver.imp += item.imp
    data.naver.cost += item.cost
    data.naver.click += item.click
    data.naver.ctr += item.ctr
    data.naver.cpc += item.cpc
    data.naver.conversion += item.conversion
    data.naver.sales += item.sales
  } else if (channel === 'facebook') {
    data.facebook.imp += item.imp
    data.facebook.cost += item.cost
    data.facebook.click += item.click
    data.facebook.ctr += item.ctr
    data.facebook.cpc += item.cpc
    data.facebook.conversion += item.conversion
    data.facebook.sales += item.sales
  } else if (channel === 'kakao') {
    data.kakao.imp += item.imp
    data.kakao.cost += item.cost
    data.kakao.click += item.click
    data.kakao.ctr += item.ctr
    data.kakao.cpc += item.cpc
    data.kakao.conversion += item.conversion
    data.kakao.sales += item.sales
  }
  data.total.imp += item.imp
  data.total.cost += item.cost
  data.total.click += item.click
  data.total.ctr += item.ctr
  data.total.cpc += item.cpc
  data.total.conversion += item.conversion
  data.total.sales += item.sales
}
