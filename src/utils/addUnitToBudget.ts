export const addUnitToBudget = (budget: number) => {
  if (budget < 1000) return `${budget}원`
  if (budget < 100000) {
    if (budget % 1000 > 0) return `${Math.floor(budget / 1000)}천 ${budget % 1000}원`
    return `${Math.floor(budget / 1000)}천원`
  }
  const thousand = Math.floor((budget % 10000) / 1000)
  const tenThousand = Math.floor(budget / 10000)
  const rest = budget % 1000
  const strArr = []
  if (tenThousand > 0) strArr.push(`${tenThousand.toLocaleString()}만`)
  if (thousand > 0) strArr.push(`${thousand}천`)
  if (rest > 0) strArr.push(rest)
  return `${strArr.join(' ')}원`
}
