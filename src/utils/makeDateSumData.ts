import { IMediaDataByDate, IMediaTotalByDateItem, ITotalChannelData } from 'types/chart'

interface IProps {
  google: IMediaDataByDate[]
  naver: IMediaDataByDate[]
  kakao: IMediaDataByDate[]
  facebook: IMediaDataByDate[]
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

export const makeDateSumData = ({ google, kakao, naver, facebook }: IProps) => {
  const newData: ITotalChannelData = {
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
  data: ITotalChannelData
  channel: string
  item: IMediaDataByDate
}
const sumDateByChannel = ({ data, channel, item }: IIProps) => {
  if (item === undefined) return
  data[channel].imp += item.imp
  data[channel].cost += item.cost
  data[channel].click += item.click
  data[channel].ctr += item.ctr
  data[channel].cpc += item.cpc
  data[channel].conversion += item.conversion
  data[channel].sales += item.sales
  data.total.imp += item.imp
  data.total.cost += item.cost
  data.total.click += item.click
  data.total.ctr += item.ctr
  data.total.cpc += item.cpc
  data.total.conversion += item.conversion
  data.total.sales += item.sales
}
