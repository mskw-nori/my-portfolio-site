import { Clipboard } from '@/components/molecules/Clipboard'
import { PageSection } from '@/components/templates/PageSection/PageSection'

import type { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'molecules/Clipboard',
  component: Clipboard,
  parameters: {
    docs: {
      description: {
        component: 'ルーズリーフモチーフのcomponent'
      }
    }
  }
} as ComponentMeta<typeof Clipboard>

const Template: ComponentStory<typeof Clipboard> = args => {
  return (
    <PageSection>
      <Clipboard {...args} />
    </PageSection>
  )
}

export const Default: ComponentStory<typeof Clipboard> = Template.bind({})

Default.args = {
  title: 'Default',
  children: <div>テスト</div>,
  pinColor: 'red'
}
