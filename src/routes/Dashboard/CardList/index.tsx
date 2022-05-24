import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { useCalculateDate } from 'hooks/useCalculateDate'

import Card from './Card'

import { getFilterTrendData } from 'services/getTrendData'
import { translateData } from './utils'

import styles from './cardList.module.scss'

interface IProps {
  category: string
  value: number[]
  prevValue: number[]
}

interface IDate {
  date: { start: string; end: string }
}

const CardList = ({ date }: IDate) => {
  const { curDate, prevDate, term } = useCalculateDate(date)
  const [cardData, setCardData] = useState<IProps[]>([])

  const { data: curData } = useQuery(
    ['#trendData', curDate.start, curDate.end],
    () => getFilterTrendData(curDate.start, curDate.end),
    {
      refetchOnWindowFocus: false,
      staleTime: 60000,
      cacheTime: Infinity,
      suspense: true,
      useErrorBoundary: true,
    }
  )

  const { data: prevData } = useQuery(
    ['#prevTrendData', prevDate.start, prevDate.end],
    () => getFilterTrendData(prevDate.start, prevDate.end),
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
