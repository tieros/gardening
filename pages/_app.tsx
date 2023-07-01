import { ApolloProvider } from '@/utils/ApolloProvider';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '../styles/theme';

import '../styles/globals.css';
import { AuthProvider } from './AuthContext';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ApolloProvider>
            <ThemeProvider>
                <AuthProvider>
                    <Component {...pageProps} />
                </AuthProvider>
            </ThemeProvider>
        </ApolloProvider>
    );
}
