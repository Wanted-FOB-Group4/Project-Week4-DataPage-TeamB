import cx from 'classnames'

import styles from './adsCreateFormInput.module.scss'

interface IProps {
  name: string
  value: number | string | boolean | undefined
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  startDate?: string
  isActive?: boolean
}

const AdsCreateFormInput = ({ name, value, onChange, startDate, isActive }: IProps) => {
  const inputTag = {
    title: <input name='title' type='text' value={value as string} onChange={onChange} />,
    isActive: <input name='isActive' type='checkBox' checked={value as boolean} onChange={onChange} />,
    startDate: <input name='startDate' type='date' value={value as string} onChange={onChange} />,
    endDate: <input name='endDate' type='date' min={startDate} value={value as string} onChange={onChange} />,
  }[name] ?? (
    <input name={name} type='number' min='0' max='99999999999999' value={value as number} onChange={onChange} />
  )

  const inputString = {
    title: '제목',
    isActive: '진행중 여부',
    startDate: '시작 날짜',
    endDate: '종료 날짜',
    budget: '일 희망 예산',
    convValue: '매출',
    cost: '광고 비용',
  }[name]

  return (
    <li className={cx(styles.createList, { [styles.isInputHidden]: name === 'endDate' && !isActive })}>
      <label htmlFor={name}>{inputString}</label>
      {inputTag}
      {name === 'isActive' && (
        <label className={styles.checkBoxLabel} htmlFor={name}>
          {value ? '완료' : '진행중'}
        </label>
      )}
    </li>
  )
}

export default AdsCreateFormInput
