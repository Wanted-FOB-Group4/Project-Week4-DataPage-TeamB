import { Suspense } from 'react'
import AdsContainers from './AdsContainers'

import styles from './manageAds.module.scss'

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

// <div className={styles.manageAdsWrapper}>
//       <div className={styles.manageAdsTop}>
//         <div>전체 광고</div>
//         <button type='button'>광고 만들기</button>
//       </div>
//       <div className={styles.manageAdsBottom}>
//         <Suspense fallback={<div>Loading...</div>}>
//           <AdsContainers />
//         </Suspense>
//       </div>
//     </div>
