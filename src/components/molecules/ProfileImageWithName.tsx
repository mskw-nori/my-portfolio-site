import { FC } from 'react'

import styles from '@/styles/modules/ProfileImageWithName.module.scss'

import { ProfileImage } from '@/components/atoms/ProfileImage'
import { getNowDateString } from '@/utils/getNowDateString'

type Props = {
  pageComment: string
  className?: string
}

export const ProfileImageWithName: FC<Props> = ({ pageComment, className }) => (
  <div className={`${styles.profile} ${className}`}>
    <ProfileImage />
    <h1>本日は {getNowDateString()}</h1>
    <h2>ようこそ、masukawa-norishige の{pageComment}へ。</h2>
  </div>
)
