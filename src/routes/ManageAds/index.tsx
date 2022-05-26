import { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'

import { Loading, ErrorMessage } from 'components'
import AdsContainers from './AdsContainers'
import AdsHeader from './AdsHeader'

const ManageAds = () => {
  const handleErrorFallback = ({ error }: { error: Error }) => <ErrorMessage error={error} />

  return (
    <>
      <h1 className='title'>광고관리</h1>
      <div className='container'>
        <AdsHeader />
        <Suspense fallback={<Loading />}>
          <ErrorBoundary fallbackRender={handleErrorFallback}>
            <AdsContainers />
          </ErrorBoundary>
        </Suspense>
      </div>
    </>
  )
}

export default ManageAds
