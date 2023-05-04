import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://api.github.com/graphql',
    cache: new InMemoryCache(),
    headers: {
        Authorization: `Bearer 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`,
    },
});

export default client;
