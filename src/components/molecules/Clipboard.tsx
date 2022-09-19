import styles from '@/styles/modules/Clipboard.module.css'

import type { FC, ReactNode } from 'react'

type Props = {
  title: string
  children: ReactNode
}

export const Clipboard: FC<Props> = ({ title, children }) => (
  <div className={styles.clipboard}>
    <div className={styles.clipboard__pins}>
      <span className={styles['clipboard__pins--left']} />
      <span className={styles['clipboard__pins--right']} />
    </div>

    <div className={styles.clipboard__contents}>
      <h1 className={styles.clipboard__title}>{title}</h1>
      <div className={styles.clipboard__note}>{children}</div>
    </div>

    <div className={styles.clipboard__pins}>
      <span className={styles['clipboard__pins--left']} />
      <span className={styles['clipboard__pins--right']} />
    </div>
  </div>
)
