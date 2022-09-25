import styles from '@/styles/modules/PageSection.module.css'

import type { FC, ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export const PageSection: FC<Props> = ({ children }) => <section className={styles.page_section}>{children}</section>
