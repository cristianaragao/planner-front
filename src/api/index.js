import React from "react";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider
} from "@apollo/client";

const client = new ApolloClient({
  ssrMode: typeof window === "undefined",
  uri: process.env.BASE_API,
  cache: new InMemoryCache(),
});

export default function Context({ children }) {
  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  );
}
