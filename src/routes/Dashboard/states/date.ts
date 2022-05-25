import { atom } from 'recoil'

export const dateState = atom<string[]>({
  key: '#dateState',
  default: ['2022-02-01', '2022-02-05'],
})

export const dateTermState = atom<{ title: string; value: number }>({
  key: '#dateTermState',
  default: { title: '일간', value: 1 },
})
