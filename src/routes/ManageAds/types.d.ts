export interface IAdData {
  count: number
  ads: IAd[]
}

export interface IAd {
  id: number
  adType: 'app' | 'web'
  title: string
  budget: number
  status: 'active' | 'ended'
  startDate: string
  endDate: string | null
  report: {
    cost: number
    convValue: number
    roas: number
  }
}
