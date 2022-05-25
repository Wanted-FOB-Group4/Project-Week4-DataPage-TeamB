import { useFetchMediaQuery } from './hooks'
import ChartByChannel from './ChartByChannel'
import Table from './Table'

const MediaContainer = () => {
  const data = useFetchMediaQuery()
  return (
    <>
      <ChartByChannel data={data} />
      <Table />
    </>
  )
}

export default MediaContainer
