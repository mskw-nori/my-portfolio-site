import { HtmlIcon } from '@/components/atoms/icons/HtmlIcon'

import type { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'atoms/icons/HtmlIcon',
  component: HtmlIcon
} as ComponentMeta<typeof HtmlIcon>

const Template: ComponentStory<typeof HtmlIcon> = args => <HtmlIcon {...args} />

export const Default: ComponentStory<typeof HtmlIcon> = Template.bind({})

Default.args = {
  height: 150
}
