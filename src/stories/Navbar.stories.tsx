import type { Meta, StoryObj } from '@storybook/react';

import Navbar from '../components/landing-page/Navbar';

const meta: Meta<typeof Navbar> = {
    title: 'Example/Navbar',
    component: Navbar,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const LandingPage: Story = {
    args: {
        isAuthenticated: false,
    },
};

export const AccountPage: Story = {
    args: {
        isAuthenticated: true,
    },
};

export const Mobile: Story = {
    args: {
        isAuthenticated: false,
    },
};
