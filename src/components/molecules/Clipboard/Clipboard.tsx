import { useLayoutEffect } from 'react'

import styles from '@/components/molecules/Clipboard/Clipboard.module.css'
import { getNowDateString } from '@/utils/getNowDateString'
import { setCssVariable } from '@/utils/setCssVariable'

import type { FC, ReactNode } from 'react'

type Props = {
  title: string
  children: ReactNode
  pinColor?: string
}

export const Clipboard: FC<Props> = ({ title, children, pinColor }) => {
  useLayoutEffect(() => {
    setCssVariable({ name: '--rolling-degree', value: `${Math.floor(Math.random() * (40 + 1 - 15)) + 15}deg` })
    if (pinColor) {
      setCssVariable({ name: '--pin-color', value: pinColor })
    }
  }, [pinColor])

  return (
    <div className={styles.clipboard}>
      <div className={styles.clipboard__pin} />

      <div className={styles.clipboard__body}>
        <h1 className={styles.clipboard__header}>
          <span className={styles.clipboard__title}>{title}</span>
          <span className={styles.clipboard__date}>{getNowDateString()}</span>
        </h1>
        <div className={styles.clipboard__contents}>{children}</div>
      </div>
    </div>
  )
}
