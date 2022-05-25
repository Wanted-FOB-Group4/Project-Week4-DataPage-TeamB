interface IProps {
  category: string
  value: number[]
  prevValue: number[]
}

const dataStructure: IProps[] = [
  { category: 'ROAS', value: [], prevValue: [] },
  { category: '광고비', value: [], prevValue: [] },
  { category: '노출수', value: [], prevValue: [] },
  { category: '클릭수', value: [], prevValue: [] },
  { category: '전환수', value: [], prevValue: [] },
  { category: '매출', value: [], prevValue: [] },
]

export const translateData = (DATA: ITrendData[], PAST_DATA: ITrendData[]) => {
  const data = dataStructure
  DATA.forEach((d) => {
    data.find((item) => item.category === 'ROAS')!.value.push(d.roas)
    data.find((item) => item.category === '광고비')!.value.push(d.cost)
    data.find((item) => item.category === '노출수')!.value.push(d.imp)
    data.find((item) => item.category === '클릭수')!.value.push(d.click)
    data.find((item) => item.category === '전환수')!.value.push(d.conv)
    data.find((item) => item.category === '매출')!.value.push(d.convValue)
  })

  PAST_DATA.forEach((d) => {
    data.find((item) => item.category === 'ROAS')!.prevValue.push(d.roas)
    data.find((item) => item.category === '광고비')!.prevValue.push(d.cost)
    data.find((item) => item.category === '노출수')!.prevValue.push(d.imp)
    data.find((item) => item.category === '클릭수')!.prevValue.push(d.click)
    data.find((item) => item.category === '전환수')!.prevValue.push(d.conv)
    data.find((item) => item.category === '매출')!.prevValue.push(d.convValue)
  })

  return data
}
