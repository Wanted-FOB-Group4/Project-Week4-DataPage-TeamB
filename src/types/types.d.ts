// types
interface ICardData {
  cardTitle: string
  cardValue: number[]
  cardPrevValue: number[]
  term: number
}

interface IApiData {
  click: number
  convValue: number
  cost: number
  cpa: number
  cpc: number
  ctr: number
  cvr: number
  imp: number
  roas: number
}

interface ITrendData extends IApiData {
  conv: number
  date: string
}

interface IMediaChannelData extends IApiData {
  channel: string
  date: string
}

interface ITable extends IApiData {
  channel: string
}

interface IDate {
  date: { start: string; end: string }
}
