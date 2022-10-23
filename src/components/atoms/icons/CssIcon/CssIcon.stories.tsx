import { CssIcon } from '@/components/atoms/icons/CssIcon'

import type { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'atoms/icons/CssIcon',
  component: CssIcon
} as ComponentMeta<typeof CssIcon>

const Template: ComponentStory<typeof CssIcon> = args => <CssIcon {...args} />

export const Default: ComponentStory<typeof CssIcon> = Template.bind({})

Default.args = {
  height: 150
}
