import { ReactNode, MouseEventHandler } from 'react'
import cx from 'classnames'

import styles from './button.module.scss'

interface IProps {
  type: 'button' | 'submit'
  onClick?: MouseEventHandler<HTMLButtonElement>
  children: ReactNode
  className?: string
}

const Button = ({ type, onClick, children, className }: IProps) => {
  if (type === 'button')
    return (
      <button className={cx(styles.buttonWrapper, className)} type='button' onClick={onClick ?? undefined}>
        {children}
      </button>
    )
  return (
    <button className={cx(styles.buttonWrapper, className)} type='submit' onClick={onClick ?? undefined}>
      {children}
    </button>
  )
}

export default Button
