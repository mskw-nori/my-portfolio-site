import { WebpackIcon } from '@/components/atoms/icons/WebpackIcon'

import type { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'atoms/icons/WebpackIcon',
  component: WebpackIcon
} as ComponentMeta<typeof WebpackIcon>

const Template: ComponentStory<typeof WebpackIcon> = args => <WebpackIcon {...args} />

export const Default: ComponentStory<typeof WebpackIcon> = Template.bind({})

Default.args = {
  height: 150
}
