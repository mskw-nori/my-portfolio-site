import styles from '@/styles/modules/Clipboard.module.css'

import type { FC, ReactNode } from 'react'

type Props = {
  title: string
  content: {
    title: ReactNode
    description: string
  }[]
}

export const Clipboard: FC<Props> = ({ content, title }) => (
  <div className={styles.clipboard}>
    <div className={styles.clipboard__pins}>
      <span className={styles['clipboard__pins--left']} />
      <span className={styles['clipboard__pins--right']} />
    </div>
    <div className={styles.clipboard__contents}>
      <h1 className={styles.clipboard__title}>{title}</h1>
      <ol>
        {content.map(({ title, description }) => (
          <li key={description} className={styles.clipboard__textarea}>
            <h2>{title}</h2>
            <p>{description}</p>
          </li>
        ))}
      </ol>
    </div>
    <div className={styles.clipboard__pins}>
      <span className={styles['clipboard__pins--left']} />
      <span className={styles['clipboard__pins--right']} />
    </div>
  </div>
)
