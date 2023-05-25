import type { Meta, StoryObj } from '@storybook/react';

import Button from '../components/UI/Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Button> = {
    title: 'Example/Button',
    component: Button,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
    args: {
        mode: 'primary',
        children: 'Click Me',
    },
};

export const Secondary: Story = {
    args: {
        mode: 'secondary',
        children: 'Click Me',
    },
};

export const Danger: Story = {
    args: {
        mode: 'danger',
        children: 'Click Me',
    },
};

export const White: Story = {
    args: {
        mode: 'white',
        children: 'Click Me',
    },
};

export const Large: Story = {
    args: {
        size: 'default',
        children: 'Click Me',
    },
};

export const Small: Story = {
    args: {
        size: 'small',
        children: 'Click Me',
    },
};
