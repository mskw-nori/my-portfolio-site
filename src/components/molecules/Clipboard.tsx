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
    <div className={styles.clipboard_pins}>
      <span className={styles.clipboard_pins__left} />
      <span className={styles.clipboard_pins__right} />
    </div>
    <div className={styles.clipboard_contents}>
      <h1 className={styles.clipboard_title}>{title}</h1>
      <ol>
        {content.map(({ title, description }) => (
          <li key={description} className={styles.clipboard_textarea}>
            <h2 className={styles.clipboard_textarea__title}>{title}</h2>
            <p className={styles.clipboard_textarea__description}>{description}</p>
          </li>
        ))}
      </ol>
    </div>
    <div className={styles.clipboard_pins}>
      <span className={styles.clipboard_pins__left} />
      <span className={styles.clipboard_pins__right} />
    </div>
  </div>
)
