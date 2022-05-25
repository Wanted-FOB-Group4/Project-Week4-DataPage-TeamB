import { atom } from 'recoil'

import { IAdData } from 'types/ads'

export const adsDataState = atom<IAdData>({
  key: '#adsDataState',
  default: {
    count: 0,
    ads: [],
  },
})
