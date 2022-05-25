import { atom } from 'recoil'

export interface IStringDateRange {
  from: string
  to: string
}

export const dateRangeState = atom<IStringDateRange>({
  key: 'dateRangeState',
  default: {
    from: '2022-02-01',
    to: '2022-02-05',
  },
})
