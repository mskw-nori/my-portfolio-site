import { HumanIcon } from '@/components/atoms/icons/HumanIcon'

import { THEME } from '@/constants/theme'

import type { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'atoms/icons/HumanIcon',
  component: HumanIcon
} as ComponentMeta<typeof HumanIcon>

const Template: ComponentStory<typeof HumanIcon> = args => <HumanIcon {...args} />

export const Default: ComponentStory<typeof HumanIcon> = Template.bind({})

Default.args = {
  fill: THEME.colors.primary.main,
  height: 150
}
