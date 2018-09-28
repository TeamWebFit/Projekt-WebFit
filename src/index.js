import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css'; //optional import
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//Apollo
import { ApolloProvider, createNetworkInterface } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const httpLink = createHttpLink({
  uri: 'https://api.graph.cool/simple/v1/cjmg855sn7qnj01169mifawhy'
})

{/*const networkInterface = createNetworkInterface({
  uri: 'https://api.graph.cool/simple/v1/cjmg855sn7qnj01169mifawhy'
})*/}

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root'));
registerServiceWorker();
