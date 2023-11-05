import {
  ApolloClient,
  HttpLink,
  ApolloLink,
  InMemoryCache,
} from '@apollo/client';

const httpLink = new HttpLink({
  uri: 'https://api.platform.opentargets.org/api/v4/graphql',
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: ApolloLink.from([httpLink]),
});

export default client;
