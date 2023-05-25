import { useState } from 'react';
import type { Meta, StoryFn } from '@storybook/react';

import Input, { Props } from '../components/UI/Input';

const meta: Meta<Props> = {
    title: 'Example/Input',
    component: Input,
    tags: ['autodocs'],
};

export default meta;

export const Default: StoryFn<Props> = () => {
    const [value, setValue] = useState('default value');

    return (
        <Input
            value={value}
            onChange={(event) => setValue(event.target.value)}
        />
    );
};

export const Mobile: StoryFn<Props> = () => {
    const [value, setValue] = useState('default value');

    return (
        <Input
            value={value}
            onChange={(event) => setValue(event.target.value)}
            mobile
        />
    );
};

export const Error: StoryFn<Props> = () => {
    const [value, setValue] = useState('default value');

    return (
        <Input
            value={value}
            onChange={(event) => setValue(event.target.value)}
            error
            errorMessage='Please enter valid value'
        />
    );
};
