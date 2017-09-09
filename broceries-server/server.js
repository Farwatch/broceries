import express from 'express'
import graphqlHTTP from 'express-graphql'
import { buildSchema } from 'graphql'
import mongoose from 'mongoose'

import schema from './api/graphql/schema/schema'

const app = express()
app.use('/graphql', graphqlHTTP({
    schema: schema,
    pretty: true,
    graphiql: true
}))

// mongoose.connect('mongodb://localhost:27017/local')

// const db = mongoose.connection
// db.on('error', () => {
//     console.log('FAILED to connect to mongoose')
// })
// db.once('open', () => {
//     console.log('CONNECTED to the mongoose')
// })

const port = process.env.PORT || 4000
app.listen(port)

console.log('Broceries GraphQL API server started on: ' + port);