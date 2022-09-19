import styles from '@/styles/modules/MainWithHeaderAndFooter.module.css'

import { Footer } from '@/components/molecules/Footer'
import { Header } from '@/components/molecules/Header'

import type { FC, ReactNode } from 'react'

type Props = {
  children: ReactNode
  pageName: string
}

export const MainWithHeaderAndFooter: FC<Props> = ({ pageName, children }) => (
  <div className={styles.layout}>
    <Header pageName={pageName} />
    <main className={styles.layout__container}>{children}</main>
    <Footer />
  </div>
)
