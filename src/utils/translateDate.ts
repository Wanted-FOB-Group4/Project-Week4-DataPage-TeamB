import dayjs from 'dayjs'

export const translateDate = (date: string) => {
  const parseDate = dayjs(date, 'YYYY-MM-DD')
  return parseDate.format('YYYY-MM-DD')
}
