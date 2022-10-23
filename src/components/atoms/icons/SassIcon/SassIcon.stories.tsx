import { SassIcon } from '@/components/atoms/icons/SassIcon'

import type { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'atoms/icons/SassIcon',
  component: SassIcon
} as ComponentMeta<typeof SassIcon>

const Template: ComponentStory<typeof SassIcon> = args => <SassIcon {...args} />

export const Default: ComponentStory<typeof SassIcon> = Template.bind({})

Default.args = {
  height: 150
}
