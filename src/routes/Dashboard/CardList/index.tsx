import { useCalculateDate } from 'hooks/useCalculateDate'
import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { getFilterTrendData } from 'services/getTrendData'
import Card from './Card'
import styles from './cardList.module.scss'
import { translateData } from './utils'

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

  const { data: curData, isLoading } = useQuery(
    ['#trendData', curDate.start, curDate.end],
    () => getFilterTrendData(curDate.start, curDate.end),
    {
      refetchOnWindowFocus: false,
      staleTime: 60000,
      cacheTime: Infinity,
    }
  )

  const { data: prevData, isLoading: prevIsLoading } = useQuery(
    ['#prevTrendData', prevDate.start, prevDate.end],
    () => getFilterTrendData(prevDate.start, prevDate.end),
    {
      refetchOnWindowFocus: false,
      staleTime: 60000,
      cacheTime: Infinity,
    }
  )

  useEffect(() => {
    if (!isLoading && !prevIsLoading) {
      setCardData(translateData(curData, prevData))
    }
  }, [curData, isLoading, prevData, prevIsLoading])

  return (
    <ul className={styles.cardListWrapper}>
      {isLoading && prevIsLoading && <div>로딩중...</div>}
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
