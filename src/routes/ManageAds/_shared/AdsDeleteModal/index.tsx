import { useRef, Dispatch, SetStateAction } from 'react'
import { useClickAway } from 'react-use'
import { useRecoilState } from 'recoil'
import store from 'store'

import { adsDataState } from 'routes/ManageAds/states'
import ModalPortal from '../ModalPortal'
import { IAd, IAdData } from 'routes/ManageAds/types'
import { Button } from 'routes/ManageAds/_shared'

import styles from './adsDeleteModal.module.scss'

interface IProps {
  id: number
  title: string
  setIsHidden: Dispatch<SetStateAction<boolean>>
}

const AdsDeleteModal = ({ id, title, setIsHidden }: IProps) => {
  const [adsData, setAdsData] = useRecoilState(adsDataState)
  const modalRef = useRef(null)
  console.log('rendered')

  const handleConfirmDeleteClick = () => {
    const newData: IAdData = {
      count: adsData.count,
      ads: adsData.ads.filter((ad: IAd) => ad.id !== id),
    }
    setAdsData(newData)
    store.set('adsData', newData)
    setIsHidden(true)
  }

  const handleCancelDeleteClick = () => {
    setIsHidden(true)
  }

  useClickAway(modalRef, handleCancelDeleteClick)

  return (
    <ModalPortal>
      <div className={styles.modalBackground}>
        <div className={styles.deleteModal} ref={modalRef}>
          <h2>정말로 해당 광고를 삭제하시겠습니까?</h2>
          <h3>{title}</h3>
          <div className={styles.deleteModalButtons}>
            <Button type='button' onClick={handleConfirmDeleteClick}>
              예
            </Button>
            <Button type='button' onClick={handleCancelDeleteClick}>
              아니오
            </Button>
          </div>
        </div>
      </div>
    </ModalPortal>
  )
}

export default AdsDeleteModal
