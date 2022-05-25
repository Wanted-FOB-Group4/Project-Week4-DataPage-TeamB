import ChartByDate from './ChartByDate'
import CardList from './CardList'
import ChartHeader from './ChartHeader'

const TMP_DATE = { start: '2022-02-06', end: '2022-02-07' }
const AdsCombineContainer = () => {
  return (
    <>
      <CardList date={TMP_DATE} />
      <ChartHeader />
      <ChartByDate />
    </>
  )
}

export default AdsCombineContainer
