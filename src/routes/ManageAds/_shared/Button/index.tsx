import { ReactNode, MouseEventHandler } from 'react'

import styles from './button.module.scss'

interface IProps {
  type: 'button' | 'submit'
  onClick?: MouseEventHandler<HTMLButtonElement>
  children: ReactNode
}

const Button = ({ type, onClick, children }: IProps) => {
  if (type === 'button')
    return (
      <button className={styles.buttonWrapper} type='button' onClick={onClick ?? undefined}>
        {children}
      </button>
    )
  return (
    <button className={styles.buttonWrapper} type='submit' onClick={onClick ?? undefined}>
      {children}
    </button>
  )
}

export default Button
