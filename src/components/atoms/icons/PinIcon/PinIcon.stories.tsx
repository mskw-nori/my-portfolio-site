import { PinIcon } from '@/components/atoms/icons/PinIcon'

import { THEME } from '@/constants/theme'

import type { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'atoms/icons/PinIcon',
  component: PinIcon
} as ComponentMeta<typeof PinIcon>

const Template: ComponentStory<typeof PinIcon> = args => <PinIcon {...args} />

export const Default: ComponentStory<typeof PinIcon> = Template.bind({})

Default.args = {
  fill: THEME.colors.basics.textGray,
  height: 150
}
