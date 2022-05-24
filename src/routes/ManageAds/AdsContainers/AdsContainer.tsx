import { useState, useRef } from 'react'
import cx from 'classnames'

import { IAd } from 'types/ads'
import { addUnitToBudget } from 'utils'
import { getCreateDate, getPercentage, getAdsTitle } from './utils'
import AdsListBlock from './AdsListBlock'

import styles from './adsContainer.module.scss'
import { useClickAway } from 'react-use'

interface IProps {
  adData: IAd
}

const AdsContainer = ({ adData }: IProps) => {
  const [isFocused, setIsFocused] = useState(false)
  const containerRef = useRef(null)
  const title = getAdsTitle(adData.title, adData.adType)
  const date = getCreateDate(adData.startDate, adData.endDate, adData.status)
  const budget = addUnitToBudget(adData.budget)
  const convValue = addUnitToBudget(adData.report.convValue)
  const cost = addUnitToBudget(adData.report.cost)
  const roas = getPercentage(adData.report.roas)

  const handleContainerClick = () => setIsFocused(true)
  const handleContainerClickAway = () => setIsFocused(false)
  useClickAway(containerRef, handleContainerClickAway)

  return (
    <li>
      <button
        className={cx(styles.adsContainerWrapper, { [styles.isContainerFocused]: isFocused })}
        type='button'
        onClick={handleContainerClick}
        ref={containerRef}
      >
        <h2>{title}</h2>
        <ul>
          <AdsListBlock dataKey='상태' dataValue={adData.status === 'active' ? '진행중' : '완료'} />
          <AdsListBlock dataKey='광고 생성일' dataValue={date} />
          <AdsListBlock dataKey='일 희망 예산' dataValue={budget} />
          <AdsListBlock dataKey='광고 수익률' dataValue={roas} />
          <AdsListBlock dataKey='매출' dataValue={convValue} />
          <AdsListBlock dataKey='광고 비용' dataValue={cost} />
        </ul>
        <button type='button'>수정하기</button>
      </button>
    </li>
  )
}

export default AdsContainer
