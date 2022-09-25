import Image from 'next/image'
import Link from 'next/link'

import styles from '@/styles/modules/ProfileImage.module.css'

import type { FC } from 'react'

export const ProfileImage: FC = () => (
  // TODO: wantedlyのページができたらリンクを切り替える
  <Link href="https://www.google.com">
    <a>
      <Image className={styles.image} src="/profile.jpeg" alt="プロフィール画像" width="100px" height="100px" />
    </a>
  </Link>
)
