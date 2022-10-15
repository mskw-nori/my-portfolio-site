import { GitIcon } from '@/components/atoms/icons/GitIcon'

import type { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'atoms/icons/GitIcon',
  component: GitIcon
} as ComponentMeta<typeof GitIcon>

const Template: ComponentStory<typeof GitIcon> = args => <GitIcon {...args} />

export const Default: ComponentStory<typeof GitIcon> = Template.bind({})

Default.args = {
  height: 150
}
