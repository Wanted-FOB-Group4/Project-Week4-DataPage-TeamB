import { adsDataState, adsFilterIndexState } from 'states'
import { useState, useEffect } from 'react'
import { useRecoilValue } from 'recoil'

import { IAd, IAdData } from 'types/ads'

const STATUS = ['all', 'active', 'ended']

export const useFilterAds = () => {
  const adsData = useRecoilValue(adsDataState)
  const adsFilterIndex = useRecoilValue(adsFilterIndexState)
  const [filteredData, setFilteredData] = useState<IAdData>({ count: 0, ads: [] })

  useEffect(() => {
    const filter = new Promise<IAdData>((resolve) => {
      if (adsFilterIndex === 0) resolve(adsData)
      const newData: IAdData = {
        count: 0,
        ads: [],
      }
      newData.ads = adsData.ads.filter((ad: IAd) => ad.status === STATUS[adsFilterIndex])
      newData.count = newData.ads.length
      resolve(newData)
    })

    filter.then((newData) => setFilteredData(newData))
  }, [adsData, adsFilterIndex])

  return filteredData
}
