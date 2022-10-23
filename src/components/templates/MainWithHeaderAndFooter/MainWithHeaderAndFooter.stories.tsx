import { Clipboard } from '@/components/molecules/Clipboard'
import { MainWithHeaderAndFooter } from '@/components/templates/MainWithHeaderAndFooter'
import { PageSection } from '@/components/templates/PageSection'

import type { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'templates/MainWithHeaderAndFooter',
  component: MainWithHeaderAndFooter,
  parameters: {
    docs: {
      description: {
        component: 'Home, About, Skills,共通のヘッダーとフッター'
      }
    }
  }
} as ComponentMeta<typeof MainWithHeaderAndFooter>

const Template: ComponentStory<typeof MainWithHeaderAndFooter> = args => <MainWithHeaderAndFooter {...args} />

export const Default: ComponentStory<typeof MainWithHeaderAndFooter> = Template.bind({})

Default.args = {
  children: (
    <PageSection>
      <Clipboard title="テストタイトル">テストメッセージ</Clipboard>
    </PageSection>
  )
}
