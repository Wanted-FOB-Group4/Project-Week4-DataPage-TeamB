import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { useRecoilValue } from 'recoil'

import Card from './Card'
import { useCalculateDate } from 'hooks/useCalculateDate'
import { getFilterTrendData } from 'services'
import { translateData } from 'routes/Dashboard/utils/makeTrendData'
import { dateRangeState } from 'routes/Dashboard/states/date'

import styles from './cardList.module.scss'

interface IProps {
  category: string
  value: number[]
  prevValue: number[]
}

const CardList = () => {
  const date = useRecoilValue(dateRangeState)

  const { curDate, prevDate, term } = useCalculateDate(date)
  const [cardData, setCardData] = useState<IProps[]>([])

  const { data: curData } = useQuery(
    ['#trendData', curDate.from, curDate.to],
    () => getFilterTrendData(curDate.from, curDate.to),
    {
      refetchOnWindowFocus: false,
      staleTime: 60000,
      cacheTime: Infinity,
      suspense: true,
      useErrorBoundary: true,
    }
  )

  const { data: prevData } = useQuery(
    ['#prevTrendData', prevDate.from, prevDate.to],
    () => getFilterTrendData(prevDate.from, prevDate.to),
    {
      refetchOnWindowFocus: false,
      staleTime: 60000,
      cacheTime: Infinity,
      suspense: true,
      useErrorBoundary: true,
    }
  )

  useEffect(() => {
    setCardData(translateData(curData, prevData))
  }, [curData, prevData])

  return (
    <ul className={styles.cardListWrapper}>
      {cardData.map((item) => (
        <Card
          key={`card_${item.category}`}
          cardTitle={item.category}
          cardValue={item.value}
          cardPrevValue={item.prevValue}
          term={Math.abs(term)}
        />
      ))}
    </ul>
  )
}

export default CardList
