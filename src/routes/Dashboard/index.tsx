import { ErrorMessage, Loading } from 'components'
import { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import AdsCombineContainer from './AdsCombineContainer'
import MediaContainer from './MediaContainer'

const Dashboard = () => {
  const handleErrorFallback = ({ error }: { error: Error }) => <ErrorMessage error={error} />
  return (
    <>
      <h1 className='title'>대시보드</h1>
      <h2 className='subtitle'>통합 광고 현황</h2>
      <div className='container'>
        <AdsCombineContainer />
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
