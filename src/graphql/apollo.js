import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core';

// HTTP connection to the API
const httpLink = createHttpLink({
    // You should use an absolute URL here
    uri: 'https://inviting-mullet-83.hasura.app/v1/graphql',
    headers: {
        'x-hasura-admin-secret': '62waEcCjKHdOfrAGxdDSYwW0OM3ACF8hcPmmqJEl3sEUsMVE0Ua3bpVlkrt2a2pp',

    }
});

// Cache implementation
const cache = new InMemoryCache();

// Create the apollo client
const apolloClient = new ApolloClient({
    link: httpLink,
    cache,
});

export default apolloClient;