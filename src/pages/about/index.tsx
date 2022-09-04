import { MainWithHeaderAndFooter } from '@/components/MainWithHeaderAndFooter'

import type { NextPageWithLayout } from '@/types/app'

const About: NextPageWithLayout = () => {
  return <div>About</div>
}

About.getLayout = page => <MainWithHeaderAndFooter pageName="About">{page}</MainWithHeaderAndFooter>

export default About
