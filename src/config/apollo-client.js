import{
    ApolloClient,
    InMemoryCache,
    HttpLink, split
} from "@apollo/client";
import {WebSocketLink} from "@apollo/client/link/ws";
import { getMainDefinition } from "@apollo/client/utilities";


const wsLink = new WebSocketLink({
    uri: 'wss://todo-gql.hasura.app/v1/graphql',
    options: {
        reconnect: true,
        connectionParams:{
            headers:{
                'x-hasura-admin-secret':'DMRCWqBjMLiiVKkXExWx2C5sMgoCIdI9hkaBB2954pV4J7Oql2FMFajR0WUYwbEX'
            }
        }
    }
})
//httpLink (sebelumnya AppoloClient)
const httpLink = new HttpLink({
    uri: 'https://todo-gql.hasura.app/v1/graphql',
    headers:{
        'x-hasura-admin-secret':'DMRCWqBjMLiiVKkXExWx2C5sMgoCIdI9hkaBB2954pV4J7Oql2FMFajR0WUYwbEX'
    }
})

const splitLink = split(
    ({query}) => {
        const definition = getMainDefinition(query);
        return(
            definition.kind === "OperationDefinition" &&
            definition.operation === "subscription"
        );
    },
    wsLink,
    httpLink
)

const client = new ApolloClient({
    link: splitLink,
    cache: new InMemoryCache(),
})
export default client;