import { useState, useRef, ChangeEvent, FormEvent, Dispatch, SetStateAction } from 'react'
import { useRecoilState } from 'recoil'
import dayjs from 'dayjs'
import store from 'store'

import { adsDataState } from 'routes/ManageAds/states/adsDataState'
import { IAdData, IAd } from 'routes/ManageAds/types'

const today = dayjs().format('YYYY-MM-DD')
const INIT_DATA: IAd = {
  id: 0,
  adType: 'web',
  title: '',
  budget: 0,
  status: 'active',
  startDate: today,
  endDate: today,
  report: {
    cost: 0,
    convValue: 0,
    roas: 0,
  },
}

const useFormHandler = (setIsHidden: Dispatch<SetStateAction<boolean>>, prevData?: IAd) => {
  const [formData, setFormData] = useState(
    prevData
      ? {
          ...prevData,
          startDate: dayjs(prevData.startDate).format('YYYY-MM-DD'),
          endDate: today,
        }
      : INIT_DATA
  )
  const [adType, setAdType] = useState(false)
  const [adsData, setAdsData] = useRecoilState(adsDataState)
  const modalRef = useRef(null)

  const handleActiveChange = () =>
    setFormData((prevState) => {
      return { ...prevState, status: prevState.status === 'active' ? 'ended' : 'active' }
    })

  const handleFormChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.currentTarget
    setFormData((prevState) => {
      return { ...prevState, [name]: value }
    })
  }

  const handleFormReportChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.currentTarget
    setFormData((prevState) => {
      return {
        ...prevState,
        report: {
          ...prevState.report,
          [name]: Number(value),
        },
      }
    })
  }

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (adsData.count >= 2647483647) setIsHidden(true)
    const newAd: IAd = {
      ...formData,
      id: prevData ? prevData.id : adsData.count + 1,
      adType: adType ? 'app' : 'web',
      endDate: formData.status === 'ended' ? formData.endDate : null,
      report: {
        ...formData.report,
        roas: formData.report.cost > 0 ? Math.floor((formData.report.convValue * 100) / formData.report.cost) : 0,
      },
    }

    const newAds: IAd[] = prevData
      ? adsData.ads.reduce((acc: IAd[], curr: IAd) => {
          if (curr.id !== newAd.id) acc.push(curr)
          else acc.push(newAd)
          return acc
        }, [])
      : [...adsData.ads, newAd]

    const newData: IAdData = {
      count: adsData.count + (prevData ? 0 : 1),
      ads: newAds,
    }
    setAdsData(newData)
    store.set('adsData', newData)
    setIsHidden(true)
  }

  const handleClickAway = () => setIsHidden(true)

  return {
    formData,
    handleActiveChange,
    handleFormChange,
    handleFormReportChange,
    handleClickAway,
    handleFormSubmit,
    modalRef,
    adType,
    setAdType,
  }
}

export default useFormHandler
