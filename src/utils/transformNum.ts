export const transformNum = (NUM: number, TYPE: string) => {
  if (TYPE === 'ROAS') return { unitCnt: Math.floor(NUM), unitWord: '' }
  const unitCnt = Math.ceil(NUM / 1000)
  const unit = ['', '천', '만', '억', '조']
  const unitWord = unit[unitCnt.toString().length]
  return { unitCnt, unitWord }
}
