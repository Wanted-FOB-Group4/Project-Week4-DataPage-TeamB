import { useMemo } from 'react'
import { IncreaseIcon, DecreaseIcon, MinusIcon } from 'assets/svgs'

import styles from './cardList.module.scss'
import { transformNum } from 'utils/transformNum'

interface IUnit {
  category: string
  value: string
}

const UNIT: IUnit[] = [
  { category: 'ROAS', value: '%' },
  { category: '광고비', value: '원' },
  { category: '노출수', value: '회' },
  { category: '클릭수', value: '회' },
  { category: '전환수', value: '회' },
  { category: '매출', value: '원' },
]

// ROAS 일때만 Math.floor 나머지는 숫자 제어해주기

const Card = ({ cardTitle, cardValue, cardPrevValue, term }: ICardData) => {
  const { unitCnt: curRate, unitWord: curRateUnit } = useMemo(() => {
    const rate = Math.floor(cardValue.reduce((acc, current) => acc + current, 0) / term)
    return transformNum(rate, cardTitle)
  }, [cardTitle, cardValue, term])

  const { unitCnt: diffRate, unitWord: cardRateUnit } = useMemo(() => {
    const dRate =
      Math.floor(cardValue.reduce((acc, current) => acc + current, 0) / term) -
      Math.floor(cardPrevValue.reduce((acc, current) => acc + current, 0) / term)
    return transformNum(dRate, cardTitle)
  }, [cardPrevValue, cardTitle, cardValue, term])

  const Icon = (rate: number) => {
    return useMemo(() => {
      if (cardPrevValue.length !== cardValue.length) return <MinusIcon />
      return rate < 0 ? <DecreaseIcon /> : <IncreaseIcon />
    }, [rate])
  }

  const unit = UNIT.find((item) => item.category === cardTitle)!.value

  const diffString =
    cardPrevValue.length === cardValue.length ? `${Math.abs(diffRate).toFixed(1) + cardRateUnit + unit}` : ''

  return (
    <li className={styles.cardWrapper}>
      <div className={styles.cardTitle}>{cardTitle}</div>
      <div className={styles.carContent}>
        <span className={styles.cardValue}>{`${Math.abs(curRate).toFixed(1) + curRateUnit + unit}`}</span>
        <div className={styles.cardRateWrapper}>
          <span className={styles.cardRate}>{diffString}</span>
          <span className={styles.cardIcon}>{Icon(diffRate)}</span>
        </div>
      </div>
    </li>
  )
}

export default Card
