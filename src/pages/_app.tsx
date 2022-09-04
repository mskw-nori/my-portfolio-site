import '@/styles/globals.css'
import 'reset-css'

import type { AppPropsWithLayout } from '@/types/app'

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? (page => page)

  return getLayout(<Component {...pageProps} />)
}
