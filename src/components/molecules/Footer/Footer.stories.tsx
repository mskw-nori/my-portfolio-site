import { Footer } from '@/components/molecules/Footer'

import type { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'molecules/Footer',
  component: Footer,
  parameters: {
    docs: {
      description: {
        component: 'Home, About, Skills,共通のフッター'
      }
    }
  }
} as ComponentMeta<typeof Footer>

const Template: ComponentStory<typeof Footer> = () => <Footer />

export const Default: ComponentStory<typeof Footer> = Template.bind({})
