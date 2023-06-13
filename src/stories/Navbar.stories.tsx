import type { Meta, StoryObj } from '@storybook/react';

import Navbar from '../components/UI/Navbar';

const navElements = [
    { label: 'How It Works', link: '#howitworks' },
    { label: 'Services', link: '#services' },
    { label: 'Testimonials', link: '#testimonials' },
    { label: 'Login', link: '/login' },
];

const meta: Meta<typeof Navbar> = {
    title: 'Example/Navbar',
    component: Navbar,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const LandingPage: Story = {
    args: { navElements },
};

export const AccountPage: Story = {
    args: { navElements },
};

export const Mobile: Story = {
    args: { navElements },
};
