import type { StoryObj, Meta } from '@storybook/react'
import { Button, ButtonProps } from '@design-system-experience/react'

export default {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'Enviar',
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}

export const Big: StoryObj<ButtonProps> = {
  args: {
    size: 'big',
  },
}
