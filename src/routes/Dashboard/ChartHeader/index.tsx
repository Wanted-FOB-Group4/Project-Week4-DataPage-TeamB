import SelectButton from './SelectButton'
import SelectDateTerm from './SelectDateTerm'

import styles from './chartHeader.module.scss'

const ChartHeader = () => {
  return (
    <div className={styles.chartHeaderContainer}>
      <SelectButton />
      <SelectDateTerm />
    </div>
  )
}

export default ChartHeader
