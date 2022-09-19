import styles from '@/styles/modules/Clipboard.module.css'

import { getNowDateString } from '@/utils/getNowDateString'

import type { FC, ReactNode } from 'react'

type Props = {
  name: string
  children: ReactNode
}

export const Clipboard: FC<Props> = ({ name, children }) => (
  <div className={styles.clipboard}>
    <div className={styles.clipboard__pins}>
      <span className={styles['clipboard__pins--left']} />
      <span className={styles['clipboard__pins--right']} />
    </div>

    <div className={styles.clipboard__contents}>
      <h1 className={styles.clipboard__title}>
        <span className={styles.clipboard__name}>{name}</span>
        <span className={styles.clipboard__date}>{getNowDateString()}</span>
      </h1>
      <div className={styles.clipboard__note}>{children}</div>
    </div>

    <div className={styles.clipboard__pins}>
      <span className={styles['clipboard__pins--left']} />
      <span className={styles['clipboard__pins--right']} />
    </div>
  </div>
)
