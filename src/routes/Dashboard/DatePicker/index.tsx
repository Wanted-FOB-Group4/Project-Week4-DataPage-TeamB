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

const Picker = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [range, setRange] = useRecoil(dateRangeState)
  const datePickerRef = useRef<HTMLDivElement>(null)

  const formatStringToDate = (date: string) => new Date(date)
  const formatDateToString = (date: Date) => dayjs(date).format('YYYY-MM-DD')
  const formatStringToKr = (date: string) => dayjs(date).format(`YYYY년 M월 D일`)

  const formatRangeToDate = ({ from, to }: IStringDateRange): DateRange => {
    return {
      from: formatStringToDate(from),
      to: formatStringToDate(to),
    }
  }

  const handleDayClick: DayClickEventHandler = (day) => {
    if (!range.to) {
      setRange({
        from: day < formatStringToDate(range.from) ? formatDateToString(day) : range.from,
        to: day > formatStringToDate(range.from) ? formatDateToString(day) : range.from,
      })
    } else {
      setRange({ from: formatDateToString(day), to: '' })
    }
  }

  useClickAway(datePickerRef, () => setIsOpen(false))

  const rangeDisplayString = `${formatStringToKr(range.from)} ~ ${formatStringToKr(range.to)}`

  const classNamesForStyle: ClassNames = {
    root: styles.root,
    months: styles.months,
    button: styles.button,
    day_range_start: styles.start,
    day_selected: styles.selected,
  }

  return (
    <div className={styles.datePicker} ref={datePickerRef}>
      <button type='button' onClick={() => setIsOpen((prev) => !prev)} className={styles.selectButton}>
        {rangeDisplayString}
        <ArrowDownIcon />
      </button>
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

export default Picker
