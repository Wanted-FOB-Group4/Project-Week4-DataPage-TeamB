import ChartByChannel from './ChartByChannel'
import ChartByDate from './ChartByDate'

const Dashboard = () => {
  return (
    <div>
      <h1>대시보드</h1>
      <ChartByDate />
      <ChartByChannel />
    </div>
  )
}

export default Dashboard
