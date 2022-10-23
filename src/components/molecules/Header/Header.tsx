import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'

import styles from '@/components/molecules/Header/Header.module.css'

import type { FC } from 'react'

const links = [
  { href: '/', name: 'HOME' },
  { href: '/about', name: 'ABOUT' },
  { href: '/skills', name: 'SKILLS' }
]

export const Header: FC = () => {
  const router = useRouter()

  return (
    <header className={styles.header}>
      <nav className={styles.header__contents}>
        <ul className={styles.header__links}>
          {links.map(({ href, name }) => (
            <li key={href}>
              <Link href={href}>
                <a className={clsx([styles.header__link, router.pathname === href && styles['header__link--current']])}>{name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
