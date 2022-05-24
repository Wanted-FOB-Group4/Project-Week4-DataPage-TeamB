import React, { useState } from 'react'
import dayjs from 'dayjs'
import cx from 'classnames'

import styles from './adsCreateForm.module.scss'
import { IAd } from 'types/ads'
import { useRecoilState } from 'recoil'
import { adsCurrentIndexState } from 'states/adsCurrentIndexState'
import AdsCreateFormLi from './AdsCreateFormLi'
import AdsCreateFormAdTypeLi from './AdsCreateFormAdTypeLi'

const AdsCreateForm = () => {
  const today = dayjs().format('YYYY-MM-DD')
  const [adType, setAdType] = useState(false)
  const [isActive, setIsActive] = useState(false)
  const [startDate, setStartDate] = useState(today)
  const [endDate, setEndDate] = useState(today)
  const [budget, setBudget] = useState(0)
  const [cost, setCost] = useState(0)
  const [convValue, setConvValue] = useState(0)
  const [title, setTitle] = useState('')
  const [adsCurrentIndex, setAdsCurrentIndex] = useRecoilState(adsCurrentIndexState)

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // const data: IAd = {
    //   id:
    // }
    console.log('잘했습니다')
  }

  const handleActiveChange = () => setIsActive((prevState) => !prevState)
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.currentTarget.value)
  const handleStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => setStartDate(e.currentTarget.value)
  const handleEndDateChange = (e: React.ChangeEvent<HTMLInputElement>) => setEndDate(e.currentTarget.value)
  const handleBudgetChange = (e: React.ChangeEvent<HTMLInputElement>) => setBudget(Number(e.currentTarget.value))
  const handleConvValueChange = (e: React.ChangeEvent<HTMLInputElement>) => setConvValue(Number(e.currentTarget.value))
  const handleCostChange = (e: React.ChangeEvent<HTMLInputElement>) => setCost(Number(e.currentTarget.value))

  return (
    <form onSubmit={handleFormSubmit} className={styles.createFormWrapper}>
      <ul>
        <AdsCreateFormLi name='title' value={title} onChange={handleTitleChange} />
        <AdsCreateFormAdTypeLi value={adType} setValue={setAdType} />
        <AdsCreateFormLi name='isActive' value={isActive} onChange={handleActiveChange} />
        <AdsCreateFormLi name='startDate' value={startDate} onChange={handleStartDateChange} />
        <AdsCreateFormLi
          name='endDate'
          value={endDate}
          onChange={handleEndDateChange}
          isActive={isActive}
          startDate={startDate}
        />
        <AdsCreateFormLi name='budget' value={budget} onChange={handleBudgetChange} />
        <AdsCreateFormLi name='convValue' value={convValue} onChange={handleConvValueChange} />
        <AdsCreateFormLi name='cost' value={cost} onChange={handleCostChange} />
      </ul>
      <button type='submit'>추가하기</button>
    </form>
  )
}

export default AdsCreateForm
