import styles from '@/styles/modules/About.module.css'

import { ProfileImageWithName } from '@/components/molecules/ProfileImageWithName'
import { MainWithHeaderAndFooter } from '@/components/templates/MainWithHeaderAndFooter'

import type { NextPageWithLayout } from '@/types/app'

const profItems = [
  { year: '1992', title: '誕生', content: '千葉県某所に生を受ける。 わりと田舎の町で成長する。' },
  { year: '2010', title: '大学へ進学', content: 'なんとなく法律を学びに大学へ。アーチェリー部の活動に熱中しすぎ、一年間留年する。' },
  {
    year: '2015',
    title: '初めての就職',
    content: 'BtoBの卸売業、仕入部門へ就職する。 同期社員、取引先に恵まれ、このまま終身雇用かと考える。'
  },
  { year: '2022 12', title: '転職を決意する', content: '働き方改革による部門方針に疑問を持ち転職を考える。\n現在フロントエンドを勉強中。' }
]

const About: NextPageWithLayout = () => (
  <section className={styles.about_page}>
    <div className={styles.about_page__profile}>
      <ProfileImageWithName pageComment="プロフィール" />
    </div>

    <ol className={styles.about_step}>
      {profItems.map(({ year, title, content }, index) => (
        <li key={year}>
          {index !== 0 && <span className={styles.about_step__bar} />}
          <div className={styles.about_step__content}>
            <h2 className={styles.about_step__header}>
              <span className={styles.about_step__date}>{year}</span>
              {title}
            </h2>
            <p className={styles.about_step__description}>{content}</p>
          </div>
        </li>
      ))}
    </ol>
  </section>
)

About.getLayout = page => <MainWithHeaderAndFooter pageName="About">{page}</MainWithHeaderAndFooter>

export default About
