import styles from '@/styles/modules/Home.module.css'

import { ProfileImageWithName } from '@/components/molecules/ProfileImageWithName'
import { MainWithHeaderAndFooter } from '@/components/templates/MainWithHeaderAndFooter'

import type { NextPageWithLayout } from '@/types/app'

const Home: NextPageWithLayout = () => (
  <section className={styles.home_page}>
    <div className={styles.home_page__profile}>
      <ProfileImageWithName pageComment="ポートフォリオ" />
    </div>
  </section>
)

Home.getLayout = page => <MainWithHeaderAndFooter pageName="Home">{page}</MainWithHeaderAndFooter>

export default Home
