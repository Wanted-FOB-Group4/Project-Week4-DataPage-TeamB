import { atom } from 'recoil'

export const dateState = atom<string[]>({
  key: '#dateState',
  default: ['2022-02-01', '2022-02-05'],
})
