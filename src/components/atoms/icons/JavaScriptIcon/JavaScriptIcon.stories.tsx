import { JavaScriptIcon } from '@/components/atoms/icons/JavaScriptIcon'

import type { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'atoms/icons/JavaScriptIcon',
  component: JavaScriptIcon
} as ComponentMeta<typeof JavaScriptIcon>

const Template: ComponentStory<typeof JavaScriptIcon> = args => <JavaScriptIcon {...args} />

export const Default: ComponentStory<typeof JavaScriptIcon> = Template.bind({})

Default.args = {
  height: 150
}
