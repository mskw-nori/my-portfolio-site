import { ClipboardIcon } from '@/components/atoms/icons/ClipboardIcon'

import { THEME } from '@/constants/theme'

import type { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'atoms/icons/ClipboardIcon',
  component: ClipboardIcon
} as ComponentMeta<typeof ClipboardIcon>

const Template: ComponentStory<typeof ClipboardIcon> = args => <ClipboardIcon {...args} />

export const Default: ComponentStory<typeof ClipboardIcon> = Template.bind({})

Default.args = {
  fill: THEME.colors.primary.main,
  height: 150
}
