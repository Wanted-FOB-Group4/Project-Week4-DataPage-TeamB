import { Suspense } from 'react'
import AdsContainers from './AdsContainers'
import AdsHeader from './AdsHeader'

import styles from './manageAds.module.scss'

const ManageAds = () => {
  return (
<<<<<<< HEAD
    <>
      <h1 className='title'>광고관리</h1>
      <div className='container'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque iure delectus doloribus commodi consectetur
        minus optio fugiat corporis quos voluptates, facilis aspernatur inventore rerum impedit quia reprehenderit vitae
        accusantium similique!
      </div>
    </>
=======
    <main className={styles.manageAdsWrapper}>
      <AdsHeader />
      <Suspense fallback={<div>Loading...</div>}>
        <AdsContainers />
      </Suspense>
    </main>
>>>>>>> 2fa99a8 (Feat: 폴더구조, 태그 구조 재조정)
  )
}

export default ManageAds

{/* <main className={styles.manageAdsWrapper}>
      <div className={styles.manageAdsTop}>
        <div>전체 광고</div>
        <button type='button'>광고 만들기</button>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <AdsContainers />
      </Suspense>
    </main> */}
