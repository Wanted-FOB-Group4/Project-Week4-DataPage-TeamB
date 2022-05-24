import { ErrorMessage, Loading } from 'components'
import { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import ChartByChannel from './ChartByChannel'
import ChartByDate from './ChartByDate'
import SelectButton from './SelectButton'
import CardList from './CardList'
import Table from './Table'

const TMP_DATE = { start: '2022-02-07', end: '2022-02-08' }

const Dashboard = () => {
  const handleErrorFallback = ({ error }: { error: Error }) => <ErrorMessage error={error} />

  return (
    <>
      <h1 className='title'>대시보드</h1>
      <h2 className='subtitle'>통합 광고 현황</h2>
      <div className='container'>
        <Suspense fallback={<Loading />}>
          <ErrorBoundary fallbackRender={handleErrorFallback}>
            <CardList date={TMP_DATE} />
          </ErrorBoundary>
        </Suspense>
        <SelectButton />
        <ChartByDate />
      </div>
      <h2 className='subtitle'>매체 현황</h2>
      <div className='container'>
        <ChartByChannel />
        <Table date={TMP_DATE} />
      </div>
    </>
  )
}

export default Dashboard
