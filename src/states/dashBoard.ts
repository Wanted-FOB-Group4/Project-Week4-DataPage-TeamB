import { atom } from 'recoil'

interface ISelectorItem {
  name: string
  title: string
}

const INIT = {
  name: '',
  title: '',
}
export const selectorState = atom<ISelectorItem[]>({
  key: 'selectorState',
  default: [{ name: 'click', title: '클릭 수' }, INIT],
})
