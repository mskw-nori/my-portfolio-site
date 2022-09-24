import styles from '@/styles/modules/Clipboard.module.css'

import { getNowDateString } from '@/utils/getNowDateString'

import type { FC, ReactNode } from 'react'

type Props = {
  name: string
  children: ReactNode
  pinColor?: string
}

export const Clipboard: FC<Props> = ({ name, children, pinColor }) => {
  const rollingDgree = `${Math.floor(Math.random() * (40 + 1 - 10)) + 15}deg`

  return (
    // NOTE: styleプロパティからCSS変数を追加するためts-ignoreしている。
    // @ts-ignore
    <div className={styles.clipboard} style={{ '--rolling-degree': rollingDgree, ...(pinColor && { '--pin-color': pinColor }) }}>
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
