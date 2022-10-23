import Image from 'next/image'
import Link from 'next/link'

import styles from '@/components/atoms/ProfileImage/ProfileImage.module.css'

import type { FC } from 'react'

type Props = {
  width?: string | number
  height?: string | number
}

export const ProfileImage: FC<Props> = ({ width = 100, height = 100 }) => (
  // TODO: wantedlyのページができたらリンクを切り替える
  <Link href="https://www.google.com">
    <a>
      <Image className={styles.image} src="/profile.jpeg" alt="プロフィール画像" width={width} height={height} />
    </a>
  </Link>
)
