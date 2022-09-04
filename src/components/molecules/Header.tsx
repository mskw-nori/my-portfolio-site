import Link from 'next/link'

import styles from '@/styles/modules/Header.module.scss'

import type { FC } from 'react'

type Props = {
  pageName: string
}

export const Header: FC<Props> = ({ pageName }) => (
  <header className={styles.header}>
    <h1 className={styles.header__title}>{pageName}</h1>
    <div>
      <Link href="/">
        <a className={styles.header__link}>HOME</a>
      </Link>
      <Link href="/about">
        <a className={styles.header__link}>ABOUT</a>
      </Link>
    </div>
  </header>
)
