import dayjs from 'dayjs'
import { useMemo } from 'react'

interface IProp {
  start: string
  end: string
}

export const useCalculateDate = (date: IProp) => {
  const [curStart, curEnd] = useMemo(() => {
    return [dayjs(date.start, 'YYYY-MM-DD'), dayjs(date.end, 'YYYY-MM-DD')]
  }, [date])

  const term = useMemo(() => {
    return curStart.diff(curEnd, 'd') - 1
  }, [curStart, curEnd])

  const [prevStart, prevEnd] = useMemo(() => {
    return [curStart.add(term, 'd'), curEnd.add(term, 'd')]
  }, [curStart, curEnd, term])

  const [curDate, prevDate] = useMemo(() => {
    return [
      { start: curStart.format('YYYY-MM-DD'), end: curEnd.format('YYYY-MM-DD') },
      { start: prevStart.format('YYYY-MM-DD'), end: prevEnd.format('YYYY-MM-DD') },
    ]
  }, [curStart, curEnd, prevStart, prevEnd])

  return { curDate, prevDate, term }
}
