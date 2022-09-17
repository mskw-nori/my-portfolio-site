import '@/styles/globals.css'
import 'reset-css'

import type { AppPropsWithLayout } from '@/types/app'

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? (page => page)

  return getLayout(<Component {...pageProps} />)
}

export default App
