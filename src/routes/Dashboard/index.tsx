import ChartByChannel from './ChartByChannel'
import ChartByDate from './ChartByDate'
import SelectButton from './SelectButton'
import CardList from './CardList'

const TMP_DATE = { start: '2022-02-06', end: '2022-02-07' }

const Dashboard = () => {
  return (
    <>
      <h1 className='title'>대시보드</h1>
      <h2 className='subtitle'>통합 광고 현황</h2>
      <div className='container'>
        <CardList date={TMP_DATE} />
        <SelectButton />
        <ChartByDate />
      </div>
      <h2 className='subtitle'>매체 현황</h2>
      <div className='container'>
        <ChartByChannel />
      </div>
    </>
  )
}

export default Dashboard
