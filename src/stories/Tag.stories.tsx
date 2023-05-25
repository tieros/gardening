import type { Meta, StoryObj } from '@storybook/react';

import Tag from '../components/UI/Tag';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Tag> = {
    title: 'Example/Tag',
    component: Tag,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Tag>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
    args: {
        label: '# default tag',
    },
};

export const Light: Story = {
    args: {
        mode: 'light',
        label: '# light tag',
    },
};

export const Large: Story = {
    args: {
        size: 'large',
        label: 'Click Me',
    },
};

export const Medium: Story = {
    args: {
        size: 'medium',
        label: 'Click Me',
    },
};

export const Small: Story = {
    args: {
        size: 'small',
        label: 'Click Me',
    },
};
