import{
    ApolloClient,
    InMemoryCache,
} from "@apollo/client";

const client = new ApolloClient({
    uri: 'https://todo-gql.hasura.app/v1/graphql',
    cache: new InMemoryCache(),
    headers:{
        'x-hasura-admin-secret':'DMRCWqBjMLiiVKkXExWx2C5sMgoCIdI9hkaBB2954pV4J7Oql2FMFajR0WUYwbEX'
    }
})

export default client;