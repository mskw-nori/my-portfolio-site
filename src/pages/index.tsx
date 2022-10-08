import Link from 'next/link'

import styles from '@/styles/modules/Home.module.css'

import { GithubIcon } from '@/components/atoms/icons/GithubIcon'
import { HumanIcon } from '@/components/atoms/icons/HumanIcon'
import { PinIcon } from '@/components/atoms/icons/PinIcon'
import { WantedlyIcon } from '@/components/atoms/icons/WantedlyIcon'

import { ProfileImage } from '@/components/atoms/ProfileImage'
import { MainWithHeaderAndFooter } from '@/components/templates/MainWithHeaderAndFooter'
import { PageSection } from '@/components/templates/PageSection'
import { THEME } from '@/constants/theme'

import type { NextPageWithLayout } from '@/types/app'

const Home: NextPageWithLayout = () => (
  <PageSection>
    <div className={styles.home_profile}>
      <div className={styles.home_profile__image}>
        <ProfileImage width={150} height={150} />
      </div>
      <div className={styles.home_profile__info}>
        <h1 className={styles.home_profile__name}>枡川敬重</h1>
        <div className={styles.home_profile__details}>
          <ul className={styles.home_profile__occupation}>
            <li className={styles.home_profile__occupation_item}>
              <HumanIcon height="18px" fill={THEME.colors.basics.textGray} />
              &nbsp; フロントエンドエンジニア志望
            </li>
            <li className={styles.home_profile__occupation_item}>
              <PinIcon height="18px" fill={THEME.colors.basics.textGray} />
              &nbsp; 千葉県
            </li>
          </ul>
          <div className={styles.home_profile__icons}>
            {/* TODO: wantedly作成後hrefを差し替える。 */}
            <Link href="https://google.com">
              <a target="_blank">
                <WantedlyIcon height="20px" fill="#fff" />
              </a>
            </Link>
            &nbsp;
            <Link href="https://github.com/mskw-nori">
              <a target="_blank">
                <GithubIcon width="20px" fill="#fff" />
              </a>
            </Link>
          </div>
        </div>
        <p className={styles.home_profile__description}>
          1992年生まれ、勉強をしながら転職活動中です。
          <br />
          登山が趣味で北アルプスが好き。
        </p>
      </div>
    </div>
  </PageSection>
)

Home.getLayout = page => <MainWithHeaderAndFooter>{page}</MainWithHeaderAndFooter>

export default Home
