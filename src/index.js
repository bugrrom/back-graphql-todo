import express from "express"
import { ApolloServer, gql } from "apollo-server-express"

const app = express()

const schema = gql`
    type Query {
        hello: String
    }
`

const resolvers = {
    Query: {
        hello: () => "hello client"
    }
}

const server = new ApolloServer({
    typeDefs: schema,
    resolvers
})

server.applyMiddleware({app})

app.listen(4000, () => {
    console.log(`Server run`)
})
