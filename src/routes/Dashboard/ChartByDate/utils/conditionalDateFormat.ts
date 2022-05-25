import dayjs from 'dayjs'

export const conditionalDateFormat = (date: string, dateTerm: string) => {
  if (dateTerm === '주간') return date
  return `${dayjs(date).format('M')}월 ${dayjs(date).format('D')}일`
}
