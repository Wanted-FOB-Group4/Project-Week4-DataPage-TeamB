import React, { useState } from 'react'
import dayjs from 'dayjs'
import cx from 'classnames'

import styles from './adsCreateForm.module.scss'
import { IAd } from 'types/ads'
import { useRecoilState } from 'recoil'
import { adsCurrentIndexState } from 'states/adsCurrentIndexState'

const AdsCreateForm = () => {
  const today = dayjs().format('YYYY-MM-DD')
  const [isActive, setIsActive] = useState(false)
  const [startDate, setStartDate] = useState(today)
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

  const handleStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => setStartDate(e.currentTarget.value)

  const handleBudgetChange = (e: React.ChangeEvent<HTMLInputElement>) => setBudget(Number(e.currentTarget.value))

  return (
    <form onSubmit={handleFormSubmit} className={styles.createFormWrapper}>
      <ul>
        <li className={styles.createList}>
          <label htmlFor='isActive'>진행중 여부</label>
          <input name='isActive' type='checkbox' checked={isActive} onChange={handleActiveChange} />
        </li>
        <li className={styles.createList}>
          <label htmlFor='startDate'>시작 날짜</label>
          <input name='startDate' type='date' value={startDate} onChange={handleStartDateChange} />
        </li>
        <li className={cx(styles.createList, { [styles.isInputHidden]: !isActive })}>
          <label htmlFor='startDate'>종료 날짜</label>
          <input name='startDate' type='date' value={startDate} onChange={handleStartDateChange} />
        </li>
        <li className={styles.createList}>
          <label htmlFor='budget'>예산</label>
          <input name='budget' type='number' max='99999999999999' value={budget} onChange={handleBudgetChange} />
        </li>
      </ul>
    </form>
  )
}

export default AdsCreateForm
