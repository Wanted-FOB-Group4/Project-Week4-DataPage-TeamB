import { atom } from 'recoil'

interface IDate {
  from: string
  to: string
}

export const dateState = atom<IDate>({
  key: '#dateState',
  default: {
    from: '2022-02-01',
    to: '2022-02-05',
  },
})

export const dateTermState = atom<{ title: string; value: number }>({
  key: '#dateTermState',
  default: { title: '일간', value: 1 },
})
