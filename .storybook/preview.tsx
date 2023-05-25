import React from 'react';
import type { Preview } from '@storybook/react';
import { ThemeProvider } from '../styles/theme';

import '!style-loader!css-loader!postcss-loader!../styles/globals.css';
import '!style-loader!css-loader!postcss-loader!tailwindcss/tailwind.css';

import 'tailwindcss/tailwind.css';
import '../styles/globals.css';

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        backgrounds: {
            default: 'gardening',
            values: [
                {
                    name: 'gardening',
                    value: '#F1F1ED',
                },
            ],
        },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
    decorators: [
        (Story) => (
            <ThemeProvider>
                <Story />
            </ThemeProvider>
        ),
    ],
};

export default preview;
