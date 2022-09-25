import styles from '@/styles/modules/Home.module.css'

import { ProfileImage } from '@/components/atoms/ProfileImage'
import { MainWithHeaderAndFooter } from '@/components/templates/MainWithHeaderAndFooter'
import { PageSection } from '@/components/templates/PageSection'

import type { NextPageWithLayout } from '@/types/app'

const Home: NextPageWithLayout = () => (
  <PageSection>
    <div className={styles.home_profile}>
      <ProfileImage />
    </div>
  </PageSection>
)

Home.getLayout = page => <MainWithHeaderAndFooter>{page}</MainWithHeaderAndFooter>

export default Home
