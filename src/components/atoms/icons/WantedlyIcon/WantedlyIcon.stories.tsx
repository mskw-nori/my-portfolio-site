import { WantedlyIcon } from '@/components/atoms/icons/WantedlyIcon'

import type { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'atoms/icons/WantedlyIcon',
  component: WantedlyIcon
} as ComponentMeta<typeof WantedlyIcon>

const Template: ComponentStory<typeof WantedlyIcon> = args => <WantedlyIcon {...args} />

export const Default: ComponentStory<typeof WantedlyIcon> = Template.bind({})

Default.args = {
  height: 150
}
