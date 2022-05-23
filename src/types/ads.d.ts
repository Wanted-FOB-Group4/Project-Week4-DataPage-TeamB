export interface IAdsData {
  count: number
  ads: IAds[]
}

export interface IAds {
  id: number
  adType: string
  title: string
  budget: number
  status: string
  startDate: string
  endDate?: string
  report: {
    cost: number
    convValue: number
    roas: number
  }
}
