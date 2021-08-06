import {
  ApolloClient,
  gql,
  NormalizedCacheObject,
  ApolloProvider
} from '@apollo/client';
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import Pages from './pages';
import { cache } from './cache';

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache,
  uri: 'http://localhost:4000/graphql',
});
 
client
  .query({
    query: gql`
      query TestQuery {
        launch(id: 56) {
          id
          mission {
            name
          }
        }
      }
    `
  })
  .then(result => console.log(result));

// ReactDOM.render(
//   <ApolloProvider client={client}>
//     <Pages />
//   </ApolloProvider>,
//   document.getElementById('root')
// );

