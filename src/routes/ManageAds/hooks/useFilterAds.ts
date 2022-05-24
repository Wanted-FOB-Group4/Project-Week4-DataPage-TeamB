import { useState, useEffect } from 'react'
import { useRecoilValue } from 'recoil'

import { adsFilterIndexState } from 'states'
import { IAd, IAdData } from 'types/ads'

const STATUS = ['all', 'active', 'ended']

export const useFilterAds = (data: IAdData) => {
  const adsFilterIndex = useRecoilValue(adsFilterIndexState)
  const [filteredData, setFilteredData] = useState<IAdData>({ count: 0, ads: [] })

  useEffect(() => {
    if (adsFilterIndex === 0) setFilteredData(data)
    const newData: IAdData = {
      count: 0,
      ads: [],
    }
    newData.ads = data.ads.filter((ad: IAd) => ad.status === STATUS[adsFilterIndex])
    newData.count = newData.ads.length
    setFilteredData(newData)
  }, [data, adsFilterIndex])

  return filteredData
}
