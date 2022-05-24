import ChartByDate from './ChartByDate'
import SelectButton from './SelectButton'
import CardList from './CardList'

const TMP_DATE = { start: '2022-02-06', end: '2022-02-07' }
const AdsCombineContainer = () => {
  return (
    <>
      <CardList date={TMP_DATE} />
      <SelectButton />
      <ChartByDate />
    </>
  )
}

export default AdsCombineContainer
