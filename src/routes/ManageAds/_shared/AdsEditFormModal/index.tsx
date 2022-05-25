import { useState, Dispatch, FormEvent, ChangeEvent, SetStateAction, useRef } from 'react'
import { useRecoilState } from 'recoil'
import dayjs from 'dayjs'
import store from 'store'

import AdsEditFormAdTypeInput from './AdsEditFormAdTypeInput'
import AdsEditFormInput from './AdsEditFormInput'
import { IAd, IAdData } from 'types/ads'
import { adsDataState } from 'states'

import styles from './adsEditFormModal.module.scss'
import ModalPortal from './ModalPortal'
import { useClickAway } from 'react-use'

interface IProps {
  prevData?: IAd
  setIsHidden: Dispatch<SetStateAction<boolean>>
}

const AdsEditFormModal = ({ prevData, setIsHidden }: IProps) => {
  const today = dayjs().format('YYYY-MM-DD')
  const [adType, setAdType] = useState(false)
  const [isDone, setIsDone] = useState(false)
  const [startDate, setStartDate] = useState(today)
  const [endDate, setEndDate] = useState(today)
  const [budget, setBudget] = useState(0)
  const [cost, setCost] = useState(0)
  const [convValue, setConvValue] = useState(0)
  const [title, setTitle] = useState('')
  const [adsData, setAdsData] = useRecoilState(adsDataState)
  const modalRef = useRef(null)

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const newData: IAdData = {
      count: adsData.count + 1,
      ads: [
        ...adsData.ads,
        {
          id: adsData.count + 1,
          adType: adType ? 'app' : 'web',
          title,
          budget,
          status: isDone ? 'ended' : 'active',
          startDate,
          endDate: isDone ? endDate : null,
          report: {
            cost,
            convValue,
            roas: Math.floor((convValue * 100) / cost),
          },
        },
      ],
    }
    setAdsData(newData)
    store.set('adsData', newData)
    setIsHidden(true)
  }

  const handleActiveChange = () => setIsDone((prevState) => !prevState)
  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.currentTarget.value)
  const handleStartDateChange = (e: ChangeEvent<HTMLInputElement>) => setStartDate(e.currentTarget.value)
  const handleEndDateChange = (e: ChangeEvent<HTMLInputElement>) => setEndDate(e.currentTarget.value)
  const handleBudgetChange = (e: ChangeEvent<HTMLInputElement>) => setBudget(Number(e.currentTarget.value))
  const handleConvValueChange = (e: ChangeEvent<HTMLInputElement>) => setConvValue(Number(e.currentTarget.value))
  const handleCostChange = (e: ChangeEvent<HTMLInputElement>) => setCost(Number(e.currentTarget.value))
  const handleClickAway = () => setIsHidden(true)

  useClickAway(modalRef, handleClickAway)

  return (
    <ModalPortal>
      <div className={styles.modalBackground}>
        <div className={styles.editModal} ref={modalRef}>
          <h2>{prevData ? '광고 수정하기' : '새 광고'}</h2>
          <form onSubmit={handleFormSubmit} className={styles.editModalFormWrapper}>
            <ul>
              <AdsEditFormInput name='title' value={title} onChange={handleTitleChange} />
              <AdsEditFormAdTypeInput value={adType} setValue={setAdType} />
              <AdsEditFormInput name='isDone' value={isDone} onChange={handleActiveChange} />
              <AdsEditFormInput name='startDate' value={startDate} onChange={handleStartDateChange} />
              <AdsEditFormInput
                name='endDate'
                value={endDate}
                onChange={handleEndDateChange}
                isDone={isDone}
                startDate={startDate}
              />
              <AdsEditFormInput name='budget' value={budget} onChange={handleBudgetChange} />
              <AdsEditFormInput name='convValue' value={convValue} onChange={handleConvValueChange} />
              <AdsEditFormInput name='cost' value={cost} onChange={handleCostChange} />
            </ul>
            <button type='submit'>추가하기</button>
          </form>
        </div>
      </div>
    </ModalPortal>
  )
}

export default AdsEditFormModal
