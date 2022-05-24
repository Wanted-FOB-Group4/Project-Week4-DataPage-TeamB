import ChartByChannel from './ChartByChannel'
import ChartByDate from './ChartByDate'
import SelectButton from './SelectButton'

const Dashboard = () => {
  return (
    <div>
      <h1>대시보드</h1>
      <SelectButton />
      <ChartByDate />
      <ChartByChannel />
    </div>
  )
}

export default Dashboard
