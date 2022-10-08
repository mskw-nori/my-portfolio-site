import { useLayoutEffect } from 'react'

import styles from '@/styles/modules/Clipboard.module.css'

import { getNowDateString } from '@/utils/getNowDateString'
import { setCssVariable } from '@/utils/setCssVariable'

import type { FC, ReactNode } from 'react'

type Props = {
  name: string
  children: ReactNode
  pinColor?: string
}

export const Clipboard: FC<Props> = ({ name, children, pinColor }) => {
  useLayoutEffect(() => {
    setCssVariable({ name: '--rolling-degree', value: `${Math.floor(Math.random() * (40 + 1 - 15)) + 15}deg` })
    if (pinColor) {
      setCssVariable({ name: '--pin-color', value: pinColor })
    }
  }, [pinColor])

  return (
    <div className={styles.clipboard}>
      <div className={styles.clipboard__pin} />

      <div className={styles.clipboard__contents}>
        <h1 className={styles.clipboard__title}>
          <span className={styles.clipboard__name}>{name}</span>
          <span className={styles.clipboard__date}>{getNowDateString()}</span>
        </h1>
        <div className={styles.clipboard__note}>{children}</div>
      </div>
    </div>
  )
}
