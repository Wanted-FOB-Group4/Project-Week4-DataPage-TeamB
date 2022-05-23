import { IAds } from 'types/ads'
import AdsListBlock from './AdsListBlock'
import { getCreateDate, getBudget, getPercentage } from './utils'

import styles from './adsContainer.module.scss'

interface IProps {
  ads: IAds
}

export const AdsContainer = ({ ads }: IProps) => {
  return (
    <div className={styles.adsContainerWrapper}>
      <h2>타이틀</h2>
      <ul>
        <AdsListBlock dataKey='상태' dataValue={ads.status === 'active' ? '진행중' : '완료'} />
        <AdsListBlock dataKey='광고 생성일' dataValue={getCreateDate(ads)} />
        <AdsListBlock dataKey='일 희망 예산' dataValue={getBudget(ads.budget)} />
        <AdsListBlock dataKey='광고 수익률' dataValue={getPercentage(ads.report.roas)} />
        <AdsListBlock dataKey='매출' dataValue={getBudget(ads.report.convValue)} />
        <AdsListBlock dataKey='광고 비용' dataValue={getBudget(ads.report.cost)} />
      </ul>
      <button type='button'>수정하기</button>
    </div>
  )
}
