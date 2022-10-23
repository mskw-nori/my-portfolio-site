import { ReactIcon } from '@/components/atoms/icons/ReactIcon'

import type { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'atoms/icons/ReactIcon',
  component: ReactIcon
} as ComponentMeta<typeof ReactIcon>

const Template: ComponentStory<typeof ReactIcon> = args => <ReactIcon {...args} />

export const Default: ComponentStory<typeof ReactIcon> = Template.bind({})

Default.args = {
  height: 150
}
