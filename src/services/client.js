import {ApolloClient, InMemoryCache} from '@apollo/client'

export const client = new ApolloClient({
  uri: 'http://api-setc.herokuapp.com/graphql',
  cache: new InMemoryCache,
  headers:{
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTIONS",
      'Access-Control-Allow-Headers': "X-Requested-With, Content-Type, X-Token-Auth, Authorization",
      "Content-Type": "application/json",
      "Accept": "application/json",
      'Authorization': 'Bearer'
  }
})