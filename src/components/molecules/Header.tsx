import Link from 'next/link'

import styles from '@/styles/modules/Header.module.scss'

import { GithubIcon } from '@/components/atoms/icons/GithubIcon'

import type { FC } from 'react'

type Props = {
  pageName: string
}

export const Header: FC<Props> = ({ pageName }) => (
  <header className={styles.header}>
    <h1 className={styles.header__title}>{pageName}</h1>
    <div className={styles.header__links}>
      <Link href="/">
        <a className={styles.header__link}>HOME</a>
      </Link>
      <Link href="/about">
        <a className={styles.header__link}>ABOUT</a>
      </Link>
      <Link href="/skills">
        <a className={styles.header__link}>SKILLS</a>
      </Link>
      <Link href="https://github.com/mskw-nori">
        <a className={styles.header__link} target="_blank">
          <GithubIcon fill="#fff" width="30px" height="30px" />
        </a>
      </Link>
    </div>
  </header>
)
