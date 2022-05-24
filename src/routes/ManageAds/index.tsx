import { Suspense } from 'react'

import Loading from 'components/Loading'
import AdsContainers from './AdsContainers'
import AdsHeader from './AdsHeader'

const ManageAds = () => {
  return (
    <>
      <h1 className='title'>광고관리</h1>
      <div className='container'>
        <AdsHeader />
        <Suspense fallback={<Loading />}>
          <AdsContainers />
        </Suspense>
      </div>
    </>
  )
}

export default ManageAds
