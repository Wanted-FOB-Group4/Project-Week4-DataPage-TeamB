import { useMemo } from 'react'
import dayjs from 'dayjs'

interface IProp {
  from: string
  to: string
}

export const useCalculateDate = (date: IProp) => {
  const [curStart, curEnd] = useMemo(() => {
    return [dayjs(date.from, 'YYYY-MM-DD'), dayjs(date.to, 'YYYY-MM-DD')]
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
