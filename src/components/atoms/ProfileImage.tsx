import Image from 'next/image'

import styles from '@/styles/modules/ProfileImage.module.scss'

export const ProfileImage = () => <Image className={styles.image} src="/profile.jpeg" alt="プロフィール画像" width={'100px'} height={'100px'} />
