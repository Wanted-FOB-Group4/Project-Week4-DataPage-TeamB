import { atom } from 'recoil'

export const serviceListState = atom({
  key: 'serviceListState',
  default: ['매드업'],
})

export const currentServiceState = atom({
  key: 'currentServiceState',
  default: '매드업',
})
