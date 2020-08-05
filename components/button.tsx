import React from 'react'
import clsx from 'clsx'
import styles from './button.module.css'

type Props = {
  color?: string // html color code
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const Button: React.FC<Props> = ({ color, style, className, children, ...rest }) => {
  return (
    <button className={clsx(styles.root, className)} style={{ ...style, backgroundColor: color }} {...rest}>
      {children}
    </button>
  )
}

export default Button
