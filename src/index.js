import { ApolloClient, ApolloProvider } from '@apollo/client';
// import { cache } from './cache';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Initialize ApolloClient
const client = new ApolloClient({
  // cache,
  uri: 'http://localhost:4000',
});

// injectStyles();

// Pass the ApolloClient instance to the ApolloProvider component
ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root'),
);