import styles from '@/styles/modules/Home.module.css'

import { ProfileImage } from '@/components/atoms/ProfileImage'
import { MainWithHeaderAndFooter } from '@/components/templates/MainWithHeaderAndFooter'

import type { NextPageWithLayout } from '@/types/app'

const Home: NextPageWithLayout = () => (
  <section className={styles.home_page}>
    <div className={styles.home_page__profile}>
      <ProfileImage />
    </div>
  </section>
)

Home.getLayout = page => <MainWithHeaderAndFooter>{page}</MainWithHeaderAndFooter>

export default Home
