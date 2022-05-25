import { Dispatch, SetStateAction } from 'react'
import { useClickAway } from 'react-use'

import AdsEditFormAdTypeInput from './AdsEditFormAdTypeInput'
import AdsEditFormInput from './AdsEditFormInput'
import { IAd } from 'types/ads'

import styles from './adsEditFormModal.module.scss'
import ModalPortal from './ModalPortal'
import useFormHandler from './useFormHandler'

interface IProps {
  prevData?: IAd
  setIsHidden: Dispatch<SetStateAction<boolean>>
}

const AdsEditFormModal = ({ prevData, setIsHidden }: IProps) => {
  const {
    formData,
    handleActiveChange,
    handleFormChange,
    handleFormReportChange,
    handleClickAway,
    handleFormSubmit,
    modalRef,
    adType,
    setAdType,
  } = useFormHandler(setIsHidden, prevData ?? undefined)

  useClickAway(modalRef, handleClickAway)

  return (
    <ModalPortal>
      <div className={styles.modalBackground}>
        <div className={styles.editModal} ref={modalRef}>
          <h2>{prevData ? '광고 수정하기' : '새 광고'}</h2>
          <form onSubmit={handleFormSubmit} className={styles.editModalFormWrapper}>
            <ul>
              <AdsEditFormInput name='title' value={formData.title} onChange={handleFormChange} />
              <AdsEditFormAdTypeInput value={adType} setValue={setAdType} />
              <AdsEditFormInput name='isDone' value={formData.status === 'ended'} onChange={handleActiveChange} />
              <AdsEditFormInput name='startDate' value={formData.startDate} onChange={handleFormChange} />
              <AdsEditFormInput
                name='endDate'
                value={formData.endDate}
                onChange={handleFormChange}
                isDone={formData.status === 'ended'}
                startDate={formData.startDate}
              />
              <AdsEditFormInput name='budget' value={formData.budget} onChange={handleFormChange} />
              <AdsEditFormInput name='convValue' value={formData.report.convValue} onChange={handleFormReportChange} />
              <AdsEditFormInput name='cost' value={formData.report.cost} onChange={handleFormReportChange} />
            </ul>
            <button type='submit'>{prevData ? '수정하기' : '추가하기'}</button>
          </form>
        </div>
      </div>
    </ModalPortal>
  )
}

export default AdsEditFormModal
