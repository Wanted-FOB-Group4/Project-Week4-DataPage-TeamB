import { IAds } from 'types/ads'
import AdsListBlock from './AdsListBlock'
import { getCreateDate, getBudget, getPercentage, getAdsTitle } from './utils'

import styles from './adsContainer.module.scss'

interface IProps {
  ads: IAds
}

export const AdsContainer = ({ ads }: IProps) => {
  const title = getAdsTitle(ads.title, ads.adType)
  const date = getCreateDate(ads.startDate, ads.endDate, ads.status)
  const budget = getBudget(ads.budget)
  const convValue = getBudget(ads.report.convValue)
  const cost = getBudget(ads.report.cost)
  const roas = getPercentage(ads.report.roas)

  return (
    <div className={styles.adsContainerWrapper}>
      <h2>{title}</h2>
      <ul>
        <AdsListBlock dataKey='상태' dataValue={ads.status === 'active' ? '진행중' : '완료'} />
        <AdsListBlock dataKey='광고 생성일' dataValue={date} />
        <AdsListBlock dataKey='일 희망 예산' dataValue={budget} />
        <AdsListBlock dataKey='광고 수익률' dataValue={roas} />
        <AdsListBlock dataKey='매출' dataValue={convValue} />
        <AdsListBlock dataKey='광고 비용' dataValue={cost} />
      </ul>
      <button type='button'>수정하기</button>
    </div>
  )
}
