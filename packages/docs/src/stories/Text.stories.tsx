import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@design-system-experience/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque perspiciatis dolorem pariatur sapiente veritatis fuga dolore, est quos dolorum possimus! Iste nostrum voluptate blanditiis ad reiciendis iure voluptatem minus sunt!',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
