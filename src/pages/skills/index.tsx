import styles from '@/styles/modules/Skills.module.scss'

import { Clipboard } from '@/components/molecules/Clipboard'
import { ProfileImageWithName } from '@/components/molecules/ProfileImageWithName'
import { MainWithHeaderAndFooter } from '@/components/templates/MainWithHeaderAndFooter'

import type { NextPageWithLayout } from '@/types/app'

const content = [
  { title: 'hogehogehoge', description: 'foofoofoo' },
  { title: 'hogehogehoge', description: 'foofoofoo' },
  { title: 'hogehogehoge', description: 'foofoofoo' },
  { title: 'hogehogehoge', description: 'foofoofooaaaaaaaaaaaaaaaaaaaaaaaaaaaaassssssssssssssssssssssssssssssssssssssssssssssssssssssssss' },
  { title: 'hogehogehoge', description: 'foofoofoo' }
]

const Skills: NextPageWithLayout = () => (
  <section className={styles.skill_page}>
    <div className={styles.skill_page__profile}>
      <ProfileImageWithName pageComment="スキルページ" />
    </div>
    <Clipboard content={content} title="Skills" />
  </section>
)

Skills.getLayout = page => <MainWithHeaderAndFooter pageName="Skills">{page}</MainWithHeaderAndFooter>

export default Skills
