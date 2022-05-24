import { Suspense } from 'react'
import AdsContainers from './AdsContainers'

const ManageAds = () => {
  return (
    <>
      <h1 className='title'>광고관리</h1>
      <div className='container'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque iure delectus doloribus commodi consectetur
        minus optio fugiat corporis quos voluptates, facilis aspernatur inventore rerum impedit quia reprehenderit vitae
        accusantium similique!
      </div>
    </>
  )
}

export default ManageAds

// <Suspense fallback={<div>Loading...</div>}>
// <AdsContainers />
// </Suspense>
