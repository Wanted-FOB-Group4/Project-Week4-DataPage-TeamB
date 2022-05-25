import styles from './chartHeader.module.scss'
import SelectButton from './SelectButton'
import SelectDateTerm from './SelectDateTerm'

const ChartHeader = () => {
  return (
    <div className={styles.chartHeaderContainer}>
      <SelectButton />
      <SelectDateTerm />
    </div>
  )
}

export default ChartHeader
