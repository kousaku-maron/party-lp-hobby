import React from 'react'
import clsx from 'clsx'
import styles from './textField.module.css'

type Props = {
  fullWidth?: boolean
  height?: number
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>

const TextField: React.FC<Props> = ({ style, className, fullWidth = false, height = 45, ...rest }) => {
  return <textarea className={clsx(styles.root, className)} style={{ ...style, width: fullWidth && '100%', height }} {...rest} />
}

export default TextField
