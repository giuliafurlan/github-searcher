import '@/styles/globals.css';
import { ApolloProvider } from '@apollo/client';
import type { AppProps } from 'next/app';
import client from '../../apollo-client';

import { Roboto } from 'next/font/google';

const roboto = Roboto({
    weight: ['400', '500', '700'],
    subsets: ['latin'],
    variable: '--font-inter',
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ApolloProvider client={client}>
            <main className={`${roboto.variable} font-sans`}>
                <Component {...pageProps} />
            </main>
        </ApolloProvider>
    );
}
