export const makeMaxDatas = (maxs: number[]) => {
  return maxs.map((maxData) => {
    let digit = 1
    while (digit * 10 < maxData) {
      digit *= 10
    }
    return (Math.floor(maxData / digit) + 1) * digit
  })
}
