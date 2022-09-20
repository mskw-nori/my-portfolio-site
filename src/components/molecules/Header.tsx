import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'

import styles from '@/styles/modules/Header.module.css'

import { GithubIcon } from '@/components/atoms/icons/GithubIcon'

import type { FC } from 'react'

const links = [
  { href: '/', name: 'HOME' },
  { href: '/about', name: 'ABOUT' },
  { href: '/skills', name: 'SKILLS' }
]

export const Header: FC = () => {
  const router = useRouter()
  console.log(router.pathname)

  return (
    <header className={styles.header}>
      <div className={styles.header__contents}>
        <div className={styles.header__links}>
          {links.map(({ href, name }) => (
            <Link href={href} key={href}>
              <a className={clsx([styles.header__link, router.pathname === href && styles['header__link--current']])}>{name}</a>
              {/* <a className={`${styles.header__link}${router.pathname === href ? ` ${styles['header__link--current']}` : ''}`}>{name}</a> */}
            </Link>
          ))}
          <Link href="https://github.com/mskw-nori">
            <a className={styles.header__link} target="_blank">
              <GithubIcon width="30px" />
            </a>
          </Link>
        </div>
      </div>
    </header>
  )
}
