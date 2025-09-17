// lib/apolloClient.ts
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { env } from './env';

const client = new ApolloClient({
  link: new HttpLink({
    uri: env.NEXT_PUBLIC_GRAPHQL_URI,
    headers: {
      "Content-Type": "application/json",
    },
  }),
  cache: new InMemoryCache(),
});

export default client;
