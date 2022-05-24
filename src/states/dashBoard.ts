import { atom } from 'recoil'

export const selectorState = atom<string[]>({
  key: 'selectorState',
  default: ['', ''],
})
