import { ProfileImage } from '@/components/atoms/ProfileImage'
import { PageSection } from '@/components/templates/PageSection/PageSection'

import type { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'atoms/ProfileImage',
  component: ProfileImage,
  parameters: {
    docs: {
      description: {
        component: 'Home, About, Skills,共通のプロフィール画像'
      }
    }
  }
} as ComponentMeta<typeof ProfileImage>

const Template: ComponentStory<typeof ProfileImage> = args => {
  return (
    <PageSection>
      <ProfileImage {...args} />
    </PageSection>
  )
}

export const Default: ComponentStory<typeof ProfileImage> = Template.bind({})

Default.args = {
  width: 100,
  height: 100
}
