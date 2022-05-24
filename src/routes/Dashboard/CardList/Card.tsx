import { IncreaseIcon, DecreaseIcon } from 'assets/svgs'
import { useMemo } from 'react'
import styles from './cardList.module.scss'
import { transformNum } from './utils'

// TODO : 선택한 일수 만큼의 이전 데이터와 비교하여 증감분 나타냄

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

  const { unitCnt: cardRate, unitWord: cardRateUnit } = useMemo(() => {
    const rate =
      Math.floor(cardValue.reduce((acc, current) => acc + current, 0) / term) -
      Math.floor(cardPrevValue.reduce((acc, current) => acc + current, 0) / term)
    return transformNum(rate, cardTitle)
  }, [cardPrevValue, cardTitle, cardValue, term])

  const Icon = (rate: number) => {
    return useMemo(() => {
      return rate < 0 ? <DecreaseIcon /> : <IncreaseIcon />
    }, [rate])
  }

  const unit = UNIT.find((item) => item.category === cardTitle)!.value

  return (
    <li className={styles.cardWrapper}>
      <div className={styles.cardTitle}>{cardTitle}</div>
      <div className={styles.carContent}>
        <span className={styles.cardValue}>{`${curRate + curRateUnit + unit}`}</span>
        <div className={styles.cardRateWrapper}>
          <span className={styles.cardRate}>{`${Math.abs(cardRate) + cardRateUnit + unit}`}</span>
          <span className={styles.cardIcon}>{Icon(cardRate)}</span>
        </div>
      </div>
    </li>
  )
}

export default Card