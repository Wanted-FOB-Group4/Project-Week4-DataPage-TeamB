// types
interface ICardData {
  cardTitle: string
  cardValue: number[]
  cardPrevValue: number[]
  term: number
}

interface ITrendData {
  click: number
  conv: number
  convValue: number
  cost: number
  cpa: number
  cpc: number
  ctr: number
  cvr: number
  date: string
  imp: number
  roas: number
}

interface IDate {
  date: { start: string; end: string }
}
