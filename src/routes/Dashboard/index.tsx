import { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'

import DatePicker from './DatePicker'
import AdsCombineContainer from './AdsCombineContainer'
import MediaContainer from './MediaContainer'
import { ErrorMessage, Loading } from 'components'

import styles from './DatePicker/datePicker.module.scss'

const Dashboard = () => {
  const handleErrorFallback = ({ error }: { error: Error }) => <ErrorMessage error={error} />

  return (
    <>
      <div className={styles.titleWithDate}>
        <h1 className='title'>대시보드</h1>
        <DatePicker />
      </div>
      <h2 className='subtitle'>통합 광고 현황</h2>
      <div className='container'>
        <Suspense fallback={<Loading />}>
          <ErrorBoundary fallbackRender={handleErrorFallback}>
            <AdsCombineContainer />
          </ErrorBoundary>
        </Suspense>
      </div>
      <h2 className='subtitle'>매체 현황</h2>
      <div className='container'>
        <Suspense fallback={<Loading />}>
          <ErrorBoundary fallbackRender={handleErrorFallback}>
            <MediaContainer />
          </ErrorBoundary>
        </Suspense>
      </div>
    </>
  )
}

export default Dashboard
