import { useFetchMediaQuery } from 'hooks'
import ChartByChannel from './ChartByChannel'

const MediaContainer = () => {
  const data = useFetchMediaQuery()
  return <ChartByChannel data={data} />
}

export default MediaContainer
