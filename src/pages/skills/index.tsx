import styles from '@/styles/modules/Skills.module.css'

import { PorfileImage } from '@/components/atoms/PorfileImage'
import { CssIcon } from '@/components/atoms/icons/CssIcon'
import { GitIcon } from '@/components/atoms/icons/GitIcon'
import { GithubIcon } from '@/components/atoms/icons/GithubIcon'
import { HtmlIcon } from '@/components/atoms/icons/HtmlIcon'
import { JavaScriptIcon } from '@/components/atoms/icons/JavaScriptIcon'
import { ReactIcon } from '@/components/atoms/icons/ReactIcon'
import { SassIcon } from '@/components/atoms/icons/SassIcon'
import { TypeScriptIcon } from '@/components/atoms/icons/TypeScriptIcon'
import { WebpackIcon } from '@/components/atoms/icons/WebpackIcon'
import { Clipboard } from '@/components/molecules/Clipboard'
import { MainWithHeaderAndFooter } from '@/components/templates/MainWithHeaderAndFooter'

import type { NextPageWithLayout } from '@/types/app'

const content = [
  {
    title: (
      <>
        ・html/css <HtmlIcon height="24px" />
        <CssIcon height="24px" />
      </>
    ),
    description: 'foofoofoo'
  },
  {
    title: (
      <>
        ・Sass <SassIcon height="22px" />
      </>
    ),
    description: 'foofoofoo'
  },
  {
    title: (
      <>
        ・JavaScript <JavaScriptIcon height="24px" />
      </>
    ),
    description: 'foofoofoo'
  },
  {
    title: (
      <>
        ・TypeScript <TypeScriptIcon height="24px" />
      </>
    ),
    description: 'foofoofoo'
  },
  {
    title: (
      <>
        ・Webpack <WebpackIcon height="24px" />
      </>
    ),
    description: 'foofoofooaaaaaaaaaaaaaaaaaaaaaaaaaaaaassssssssssssssssssssssssssssssssssssssssssssssssssssssssss'
  },
  {
    title: (
      <>
        ・React <ReactIcon height="24px" />
      </>
    ),
    description: 'foofoofoo'
  },
  {
    title: (
      <>
        ・Git/Github <GitIcon height="24px" />
        <GithubIcon height="24px" />
      </>
    ),
    description: 'foofoofoo'
  }
]

const Skills: NextPageWithLayout = () => (
  <section className={styles.skill_page}>
    <div className={styles.skill_page__profile}>
      <PorfileImage />
    </div>
    <Clipboard name="Skills">
      <ol>
        {content.map(({ title, description }, index) => (
          <li key={index}>
            <h2>{title}</h2>
            <p>{description}</p>
          </li>
        ))}
      </ol>
    </Clipboard>
  </section>
)

Skills.getLayout = page => <MainWithHeaderAndFooter pageName="Skills">{page}</MainWithHeaderAndFooter>

export default Skills
