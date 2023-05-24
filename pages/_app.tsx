import { ApolloProvider } from '@/utils/ApolloProvider';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '../styles/theme';

import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ApolloProvider>
            <ThemeProvider>
                <Component {...pageProps} />
            </ThemeProvider>
        </ApolloProvider>
    );
}
