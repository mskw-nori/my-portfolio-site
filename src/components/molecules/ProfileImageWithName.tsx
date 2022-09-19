import Image from 'next/image'

import styles from '@/styles/modules/ProfileImageWithName.module.css'

import { getNowDateString } from '@/utils/getNowDateString'

import type { FC } from 'react'

type Props = {
  pageComment: string
}

export const ProfileImageWithName: FC<Props> = ({ pageComment }) => (
  <div className={styles.profile}>
    <Image className={styles.profile__image} src="/profile.jpeg" alt="プロフィール画像" width="100px" height="100px" />
    <h1>本日は {getNowDateString()}</h1>
    <h2>ようこそ、masukawa-norishige の{pageComment}へ。</h2>
  </div>
)
