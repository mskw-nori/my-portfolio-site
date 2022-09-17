import styles from '@/styles/modules/Home.module.scss'

import { ProfileImageWithName } from '@/components/molecules/ProfileImageWithName'
import { MainWithHeaderAndFooter } from '@/components/templates/MainWithHeaderAndFooter'

import type { NextPageWithLayout } from '@/types/app'

const items = [
  { icon: 1, name: 'hogehogehoge', description: 'foofoofoo' },
  { icon: 2, name: 'hogehogehoge', description: 'foofoofoo' },
  { icon: 3, name: 'hogehogehoge', description: 'foofoofoo' },
  { icon: 4, name: 'hogehogehoge', description: 'foofoofooaaaaaaaaaaaaaaaaaaaaaaaaaaaaassssssssssssssssssssssssssssssssssssssssssssssssssssssssss' },
  { icon: 5, name: 'hogehogehoge', description: 'foofoofoo' }
]

const Home: NextPageWithLayout = () => (
  <section className={styles.home_page}>
    <div className={styles.home_page__profile}>
      <ProfileImageWithName pageComment="ポートフォリオ" />
    </div>

    <div className={styles.home_sheet}>
      <div className={styles.home_sheet__pins}>
        <span className={styles.home_sheet__leftpin}>l</span>
        <span className={styles.home_sheet__rightpin}>l</span>
      </div>
      <h1 className={styles.home_sheet__title}>Skills</h1>
      <ol>
        {items.map(({ icon, name, description }) => (
          <li key={icon} className={styles.home_sheet__skill}>
            <h2 className={styles.home_sheet__skill__name}>
              <span>{icon}</span>
              {name}
            </h2>
            <p className={styles.home_sheet__skill__description}>{description}</p>
          </li>
        ))}
      </ol>
      <div className={styles.home_sheet__pins}>
        <span className={styles.home_sheet__leftpin}>l</span>
        <span className={styles.home_sheet__rightpin}>l</span>
      </div>
    </div>
  </section>
)

Home.getLayout = page => <MainWithHeaderAndFooter pageName="Home">{page}</MainWithHeaderAndFooter>

export default Home
