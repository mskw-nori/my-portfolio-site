import { GithubIcon } from '@/components/atoms/icons/GithubIcon'

import type { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'atoms/icons/GithubIcon',
  component: GithubIcon
} as ComponentMeta<typeof GithubIcon>

const Template: ComponentStory<typeof GithubIcon> = args => <GithubIcon {...args} />

export const Default: ComponentStory<typeof GithubIcon> = Template.bind({})

Default.args = {
  height: 150
}
