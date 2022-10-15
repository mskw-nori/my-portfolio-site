import { NextjsIcon } from '@/components/atoms/icons/NextjsIcon'

import type { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'atoms/icons/NextjsIcon',
  component: NextjsIcon
} as ComponentMeta<typeof NextjsIcon>

const Template: ComponentStory<typeof NextjsIcon> = args => <NextjsIcon {...args} />

export const Default: ComponentStory<typeof NextjsIcon> = Template.bind({})

Default.args = {
  height: 150
}
