import styles from './adsListBlock.module.scss'

interface IProps {
  dataKey: string
  dataValue: string | number
}

const AdsListBlock = ({ dataKey, dataValue }: IProps) => {
  return (
    <li className={styles.adsListBlockWrapper}>
      <dl className={styles.adsListDL}>
        <dt>{dataKey}</dt>
        <dd>{dataValue}</dd>
      </dl>
    </li>
  )
}

export default AdsListBlock
