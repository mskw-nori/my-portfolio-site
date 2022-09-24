import 'reset-css'
import '@fontsource/new-tegomin'

import '@/styles/globals.css'

import { useSetThemeVariablesToCssVariables } from '@/hooks/useSetThemeVariablesToCssVariables'

import type { AppPropsWithLayout } from '@/types/app'

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  useSetThemeVariablesToCssVariables()

  const getLayout = Component.getLayout ?? (page => page)

  return getLayout(<Component {...pageProps} />)
}

export default App
