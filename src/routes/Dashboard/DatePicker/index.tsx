import { useRef, useState } from 'react'
import { useClickAway } from 'react-use'
import dayjs from 'dayjs'
import { ClassNames, DateRange, DayClickEventHandler, DayPicker } from 'react-day-picker'

import { useRecoil } from 'hooks/state'
import { dateRangeState, IStringDateRange } from '../states/date'

import { ArrowDownIcon } from 'assets/svgs'
import 'react-day-picker/dist/style.css'
import styles from './datePicker.module.scss'

const FIRST_DAY = new Date('2022-02-01')
const LAST_DAY = new Date('2022-04-20')

const DatePicker = () => {
  const [globalRange, setGlobalRange] = useRecoil(dateRangeState)
  const [range, setRange] = useState(globalRange)
  const [isOpen, setIsOpen] = useState(false)
  const datePickerRef = useRef<HTMLDivElement>(null)

  const classNamesForStyle: ClassNames = {
    root: styles.root,
    months: styles.months,
    button: styles.button,
    day_range_start: styles.start,
    day_selected: styles.selected,
  }

  const formatStringToDate = (date: string) => new Date(date)
  const formatDateToString = (date: Date) => dayjs(date).format('YYYY-MM-DD')
  const formatStringToKr = (date: string) => dayjs(date).format(`YYYY년 M월 D일`)

  const formatRangeToDate = ({ from, to }: IStringDateRange): DateRange => {
    return {
      from: formatStringToDate(from),
      to: formatStringToDate(to),
    }
  }

  const rangeDisplayString = `${formatStringToKr(globalRange.from)} ~ ${formatStringToKr(globalRange.to)}`

  const handleDayClick: DayClickEventHandler = (selectedDate) => {
    const startDate = formatStringToDate(range.from)
    const selectedDateString = formatDateToString(selectedDate)

    if (startDate.getDate() === selectedDate.getDate()) return

    if (!range.to) {
      setRange({
        from: selectedDate < startDate ? selectedDateString : range.from,
        to: selectedDate > startDate ? selectedDateString : range.from,
      })
    } else {
      setRange({ from: selectedDateString, to: '' })
    }
  }

  const handleConfirmClick = () => {
    if (!range.to) return
    setGlobalRange(range)
    setIsOpen(false)
  }

  useClickAway(datePickerRef, () => setIsOpen(false))

  return (
    <div className={styles.datePickerWrapper} ref={datePickerRef}>
      <div className={styles.buttonsWrapper}>
        {isOpen && (
          <button type='button' onClick={handleConfirmClick} disabled={!range.to} className={styles.confirmButton}>
            확인
          </button>
        )}
        <button type='button' onClick={() => setIsOpen((prev) => !prev)} className={styles.selectButton}>
          {rangeDisplayString}
          <ArrowDownIcon />
        </button>
      </div>

      {isOpen && (
        <DayPicker
          mode='range'
          defaultMonth={formatStringToDate(range.from)}
          fromDate={FIRST_DAY}
          toDate={LAST_DAY}
          selected={formatRangeToDate(range)}
          onDayClick={handleDayClick}
          classNames={classNamesForStyle}
        />
      )}
    </div>
  )
}

export default DatePicker
