import dayjs from 'dayjs'

interface IProp {
  start: string
  end: string
}

export const useCalculateDate = (date: IProp) => {
  const curStart = dayjs(date.start, 'YYYY-MM-DD')
  const curEnd = dayjs(date.end, 'YYYY-MM-DD')
  const term = curStart.diff(curEnd, 'd') - 1
  const pastStart = curStart.add(term)
  const pastEnd = curEnd.add(term)

  const curDate = { start: curStart.format('YYYY-MM-DD'), end: curEnd.format('YYYY-MM-DD') }
  const pastDate = { start: pastStart.format('YYYY-MM-DD'), end: pastEnd.format('YYYY-MM-DD') }

  return { curDate, pastDate }
}
