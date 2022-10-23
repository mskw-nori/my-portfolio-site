import { TypeScriptIcon } from '@/components/atoms/icons/TypeScriptIcon'

import type { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'atoms/icons/TypeScriptIcon',
  component: TypeScriptIcon
} as ComponentMeta<typeof TypeScriptIcon>

const Template: ComponentStory<typeof TypeScriptIcon> = args => <TypeScriptIcon {...args} />

export const Default: ComponentStory<typeof TypeScriptIcon> = Template.bind({})

Default.args = {
  height: 150
}
