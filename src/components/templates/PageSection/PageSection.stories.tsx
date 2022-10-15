import { PageSection } from '@/components/templates/PageSection'

import type { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'templates/PageSection',
  component: PageSection,
  parameters: {
    docs: {
      description: {
        component: '表示されるコンテンツの幅と余白を設定しています。'
      }
    }
  }
} as ComponentMeta<typeof PageSection>

const Template: ComponentStory<typeof PageSection> = arg => <PageSection {...arg} />

export const Default: ComponentStory<typeof PageSection> = Template.bind({})

Default.args = {
  children: <div>表示されるコンテンツの幅と余白を設定しています。</div>
}
