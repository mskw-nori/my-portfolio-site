import { useRouter } from 'next/router'

import { ClipboardIcon } from '@/components/atoms/icons/ClipboardIcon'

import { Footer } from '@/components/molecules/Footer'
import { Header } from '@/components/molecules/Header'
import styles from '@/components/templates/MainWithHeaderAndFooter/MainWithHeaderAndFooter.module.css'
import { isSmartphone } from '@/utils/mediaQuery'

import type { FC, ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export const MainWithHeaderAndFooter: FC<Props> = ({ children }) => {
  const router = useRouter()
  const isHome = router.pathname === '/'

  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.layout__container}>
        {children}
        {!isSmartphone && !isHome && <ClipboardIcon className={styles.layout__icon} width={150} fill="#B7CDE8" />}
      </main>
      <Footer />
    </div>
  )
}
