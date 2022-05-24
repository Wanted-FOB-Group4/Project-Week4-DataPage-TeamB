// types
export interface IMediaDataItem {
  channel: string
  date: string
  imp: number
  click: number
  convValue: number
  cost: number
  cpa: number
  cpc: number
  ctr: number
  cvr: number
  roas: number
}

export interface IMediaDataByDate extends IMediaDataItem {
  conversion: number
  sales: number
}

export interface ITotalByDate {
  cost: number
  imp: number
  click: number
  conversion: number
  sales: number
  cost: number
  roas: number
}

export interface ITrendDataItem {
  imp: number
  click: number
  cost: number
  conv: number
  convValue: number
  ctr: number
  cvr: number
  cpc: number
  cpa: number
  roas: number
  date: string
}

export interface ITrendDataByDate extends ITrendDataItem {
  conversion: number
  sales: number

  [prop: string]: any
}
