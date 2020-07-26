import React from 'react'
import styles from './button.module.css'

type Props = {
  color?: string // html color code
  style?: React.CSSProperties
}

const Button: React.FC<Props> = ({ color, style, children }) => {
  return (
    <button className={styles.root} style={{ ...style, backgroundColor: color }}>
      {children}
    </button>
  )
}

export default Button
