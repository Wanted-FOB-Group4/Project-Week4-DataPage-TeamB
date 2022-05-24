import { atom } from 'recoil'

export const adsCurrentIndexState = atom<number>({
  key: '#adsCurrentIndexState',
  default: 1,
})
