import styles from '@/styles/modules/About.module.css'

import { ProfileImage } from '@/components/atoms/ProfileImage'
import { Clipboard } from '@/components/molecules/Clipboard'
import { MainWithHeaderAndFooter } from '@/components/templates/MainWithHeaderAndFooter'
import { PageSection } from '@/components/templates/PageSection'

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
] as const

const About: NextPageWithLayout = () => (
  <PageSection>
    <div className={styles.about_profile}>
      <ProfileImage />
    </div>
    <Clipboard name="経歴">
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
    </Clipboard>
  </PageSection>
)

About.getLayout = page => <MainWithHeaderAndFooter>{page}</MainWithHeaderAndFooter>

export default About
