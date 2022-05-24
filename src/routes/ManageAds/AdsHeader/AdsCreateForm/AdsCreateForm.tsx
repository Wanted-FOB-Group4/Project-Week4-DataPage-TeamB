import React, { useState } from 'react'
import dayjs from 'dayjs'
import cx from 'classnames'

import styles from './adsCreateForm.module.scss'
import { IAd } from 'types/ads'
import { useRecoilState } from 'recoil'
import { adsCurrentIndexState } from 'states/adsCurrentIndexState'
import AdsCreateFormLi from './AdsCreateFormLi'

const AD_TYPE_WEB = true
const AD_TYPE_APP = false

const AdsCreateForm = () => {
  const today = dayjs().format('YYYY-MM-DD')
  const [adType, setAdType] = useState(AD_TYPE_WEB)
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

  const handleAdTypeWebChange = () => setAdType(AD_TYPE_WEB)
  const handleAdTypeAppChange = () => setAdType(AD_TYPE_APP)
  const handleActiveChange = () => setIsActive((prevState) => !prevState)
  const handleStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => setStartDate(e.currentTarget.value)
  const handleEndDateChange = (e: React.ChangeEvent<HTMLInputElement>) => setEndDate(e.currentTarget.value)
  const handleBudgetChange = (e: React.ChangeEvent<HTMLInputElement>) => setBudget(Number(e.currentTarget.value))
  const handleConvValueChange = (e: React.ChangeEvent<HTMLInputElement>) => setConvValue(Number(e.currentTarget.value))
  const handleCostChange = (e: React.ChangeEvent<HTMLInputElement>) => setCost(Number(e.currentTarget.value))

  return (
    <form onSubmit={handleFormSubmit} className={styles.createFormWrapper}>
      <ul>
        <li className={styles.createList}>
          <label htmlFor='adType'>광고 타입</label>
          <div className={styles.radioInput}>
            <input
              name='adType'
              id='radioWeb'
              type='radio'
              className={styles.radioWeb}
              checked={adType === AD_TYPE_WEB}
              onChange={handleAdTypeWebChange}
            />
            <label htmlFor='radioWeb'>웹 광고</label>
            <input
              name='adType'
              id='radioApp'
              type='radio'
              className={styles.radioApp}
              checked={adType === AD_TYPE_APP}
              onChange={handleAdTypeAppChange}
            />
            <label htmlFor='radioApp'>앱 광고</label>
          </div>
        </li>
        <li className={styles.createList}>
          <AdsCreateFormLi name='isActive' value={isActive} onChange={handleActiveChange} />
        </li>
        <li className={styles.createList}>
          <AdsCreateFormLi name='startDate' value={startDate} onChange={handleStartDateChange} />
        </li>
        <li className={cx(styles.createList, { [styles.isInputHidden]: !isActive })}>
          <AdsCreateFormLi name='endDate' value={endDate} onChange={handleEndDateChange} />
        </li>
        <li className={styles.createList}>
          <AdsCreateFormLi name='budget' value={budget} onChange={handleBudgetChange} />
        </li>
        <li className={styles.createList}>
          <AdsCreateFormLi name='convValue' value={convValue} onChange={handleConvValueChange} />
        </li>
        <li className={styles.createList}>
          <AdsCreateFormLi name='cost' value={cost} onChange={handleCostChange} />
        </li>
      </ul>
      <button type='submit'>추가하기</button>
    </form>
  )
}

export default AdsCreateForm
