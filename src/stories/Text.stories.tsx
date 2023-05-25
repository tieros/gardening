import type { Meta, StoryObj } from '@storybook/react';

import Text from '../components/UI/Text';
const meta: Meta<typeof Text> = {
    title: 'Example/Text',
    component: Text,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Text>;

export const SmallText: Story = {
    args: {
        size: 'small',
    },
};

export const LargeText: Story = {
    args: {
        size: 'large',
    },
};
