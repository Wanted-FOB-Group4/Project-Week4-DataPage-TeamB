import React, { useState } from 'react'
import { useRecoilState } from 'recoil'
import dayjs from 'dayjs'
import cx from 'classnames'

import { adsCurrentIndexState } from 'states/adsCurrentIndexState'

import AdsCreateFormAdTypeInput from './AdsCreateFormAdTypeInput'
import AdsCreateFormInput from './AdsCreateFormInput'
import styles from './adsCreateContainer.module.scss'
import { IAd } from 'types/ads'

interface IProps {
  isHidden: boolean
}

const AdsCreateContainer = ({ isHidden }: IProps) => {
  const today = dayjs().format('YYYY-MM-DD')
  const [adType, setAdType] = useState(false)
  const [isDone, setIsActive] = useState(false)
  const [startDate, setStartDate] = useState(today)
  const [endDate, setEndDate] = useState(today)
  const [budget, setBudget] = useState(0)
  const [cost, setCost] = useState(0)
  const [convValue, setConvValue] = useState(0)
  const [title, setTitle] = useState('')
  const [adsCurrentIndex, setAdsCurrentIndex] = useRecoilState(adsCurrentIndexState)

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data: IAd = {
      id: adsCurrentIndex + 1,
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
    }
    console.log(data)
  }

  const handleActiveChange = () => setIsActive((prevState) => !prevState)
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.currentTarget.value)
  const handleStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => setStartDate(e.currentTarget.value)
  const handleEndDateChange = (e: React.ChangeEvent<HTMLInputElement>) => setEndDate(e.currentTarget.value)
  const handleBudgetChange = (e: React.ChangeEvent<HTMLInputElement>) => setBudget(Number(e.currentTarget.value))
  const handleConvValueChange = (e: React.ChangeEvent<HTMLInputElement>) => setConvValue(Number(e.currentTarget.value))
  const handleCostChange = (e: React.ChangeEvent<HTMLInputElement>) => setCost(Number(e.currentTarget.value))

  return (
    <div className={cx(styles.createContainer, { [styles.isCreateBoxHidden]: isHidden })}>
      <h2>새 광고</h2>
      <form onSubmit={handleFormSubmit} className={styles.createFormWrapper}>
        <ul>
          <AdsCreateFormInput name='title' value={title} onChange={handleTitleChange} />
          <AdsCreateFormAdTypeInput value={adType} setValue={setAdType} />
          <AdsCreateFormInput name='isDone' value={isDone} onChange={handleActiveChange} />
          <AdsCreateFormInput name='startDate' value={startDate} onChange={handleStartDateChange} />
          <AdsCreateFormInput
            name='endDate'
            value={endDate}
            onChange={handleEndDateChange}
            isDone={isDone}
            startDate={startDate}
          />
          <AdsCreateFormInput name='budget' value={budget} onChange={handleBudgetChange} />
          <AdsCreateFormInput name='convValue' value={convValue} onChange={handleConvValueChange} />
          <AdsCreateFormInput name='cost' value={cost} onChange={handleCostChange} />
        </ul>
        <button type='submit'>추가하기</button>
      </form>
    </div>
  )
}

export default AdsCreateContainer
