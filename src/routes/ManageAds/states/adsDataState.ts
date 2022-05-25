import { atom } from 'recoil'

import { IAdData } from 'routes/ManageAds/types'

export const adsDataState = atom<IAdData>({
  key: '#adsDataState',
  default: {
    count: 0,
    ads: [],
  },
})
