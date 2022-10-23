import { Header } from '@/components/molecules/Header'

import type { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'molecules/Header',
  component: Header,
  parameters: {
    docs: {
      description: {
        component: 'Home, About, Skills,共通のヘッダー'
      }
    }
  }
} as ComponentMeta<typeof Header>

const Template: ComponentStory<typeof Header> = () => <Header />

export const Default: ComponentStory<typeof Header> = Template.bind({})
