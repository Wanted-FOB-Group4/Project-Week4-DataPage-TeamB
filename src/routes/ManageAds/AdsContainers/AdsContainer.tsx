import { useState } from 'react'

import { IAd } from 'routes/ManageAds/types'
import { addUnitToBudget } from 'utils'
import { getCreateDate, getPercentage, getAdsTitle } from './utils'
import AdsListBlock from './AdsListBlock'
import AdsEditFormModal from 'routes/ManageAds/_shared/AdsEditFormModal'

import styles from './adsContainer.module.scss'

interface IProps {
  adData: IAd
}

const AdsContainer = ({ adData }: IProps) => {
  const title = getAdsTitle(adData.title, adData.adType)
  const date = getCreateDate(adData.startDate, adData.endDate, adData.status)
  const budget = addUnitToBudget(adData.budget)
  const convValue = addUnitToBudget(adData.report.convValue)
  const cost = addUnitToBudget(adData.report.cost)
  const roas = getPercentage(adData.report.roas)
  const [isEditBoxHidden, setIsEditBoxHidden] = useState(true)

  const handleButtonClick = () => {
    setIsEditBoxHidden((prevState) => !prevState)
  }

  return (
    <li className={styles.adsContainerWrapper}>
      <h2>{title}</h2>
      <ul>
        <AdsListBlock dataKey='상태' dataValue={adData.status === 'active' ? '진행중' : '완료'} />
        <AdsListBlock dataKey='광고 생성일' dataValue={date} />
        <AdsListBlock dataKey='일 희망 예산' dataValue={budget} />
        <AdsListBlock dataKey='광고 수익률' dataValue={roas} />
        <AdsListBlock dataKey='매출' dataValue={convValue} />
        <AdsListBlock dataKey='광고 비용' dataValue={cost} />
      </ul>
      <button type='button' onClick={handleButtonClick}>
        수정하기
      </button>
      {!isEditBoxHidden && <AdsEditFormModal prevData={adData} setIsHidden={setIsEditBoxHidden} />}
    </li>
  )
}

export default AdsContainer
