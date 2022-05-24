import { Suspense } from 'react'
import AdsContainers from './AdsContainers'
import AdsHeader from './AdsHeader'

const ManageAds = () => {
  return (
    <>
      <h1 className='title'>광고관리</h1>
      <div className='container'>
        <AdsHeader />
        <Suspense fallback={<div>Loading...</div>}>
          <AdsContainers />
        </Suspense>
      </div>
    </>
  )
}

export default ManageAds
