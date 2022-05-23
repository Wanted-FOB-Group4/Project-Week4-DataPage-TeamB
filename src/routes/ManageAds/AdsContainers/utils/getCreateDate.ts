import dayjs from 'dayjs'

const getCreateDate = (startDate: string, endDate: string | null, status: string) => {
  const formattedStartDate = dayjs(startDate).format('YYYY-MM-DD')
  if (status === 'active') return formattedStartDate
  const formattedEndDate = dayjs(endDate).format('YYYY-MM-DD')
  return `${formattedStartDate} (${formattedEndDate})`
}

export default getCreateDate
