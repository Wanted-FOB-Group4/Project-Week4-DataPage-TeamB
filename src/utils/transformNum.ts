export const transformNum = (NUM: number, TYPE: string) => {
  if (TYPE === 'ROAS') return { unitCnt: Math.floor(NUM), unitWord: '' }
  let tmpNum = NUM / 1000
  let translateNum = Math.floor(tmpNum).toString().length

  if (Math.floor(tmpNum) < 1) {
    tmpNum *= 1000
    translateNum = 0
  }

  const unitCnt = tmpNum
  const unit = ['', '천', '만', '만', '만', '억', '억', '억', '조']
  const unitWord = unit[translateNum]

  return { unitCnt, unitWord }
}
