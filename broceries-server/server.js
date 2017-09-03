import express from 'express'
import graphqlHTTP from 'express-graphql'
import { buildSchema } from 'graphql'

import schema from './api/types/queryTypes'

// const schema = buildSchema(`
//     type Query {
//         recipes: [RecipeName]
//         recipe(id: String!): RecipeDetail
//     }
//     type RecipeName {
//         name: String,
//         id: ID
//     }
//     type RecipeDetail {
//         name: String,
//         cookingTime: Int
//         placeOfOrigin: String
//         ingredients: [String]
//     }
// `)

// const root = {
//     recipes: () => {
//         return [
//             {
//                 name: 'Gumbo no. 5',
//                 id: 1
//             },
//             {
//                 name: 'Some sewage',
//                 id: 2
//             },
//             {
//                 name: 'Purple Drank',
//                 id: 3
//             }
//         ]
//     },
//     recipe: ({ id }) => {
//         switch(id) {
//             case '1':
//                 return {
//                     name: 'Gumbo no. 5',
//                     cookingTime: 5,
//                     placeOfOrigin: 'Loubegaville',
//                     ingredients: [
//                         'Monica',
//                         'Erica',
//                         'Tina',
//                         'Rita',
//                         'Sandra',
//                         'Mary',
//                         'Jessica',
//                         'YOU'
//                     ]
//                 }
//                 break
//             case '2':
//                 return {
//                     name: 'Some sewage',
//                     cookingTime: 120,
//                     placeOfOrigin: 'The sewers',
//                     ingredients: [
//                         'Used condom',
//                         'Balled up tissue',
//                         'Syringe',
//                         'Blinky'
//                     ]
//                 }
//                 break
//             case '3':
//                 return {
//                     name: 'Purple Drank',
//                     cookingTime: 1,
//                     placeOfOrigin: 'Harlem or somewhere',
//                     ingredients: [
//                         'Purple',
//                         'Drank'
//                     ]
//                 }
//                 break
//             default:
//                 return null
//         }
//     }
// }

const app = express()
app.use('/graphql', graphqlHTTP({
    schema: schema,
    // rootValue: root,
    pretty: true,
    graphiql: true
}))

const port = process.env.PORT || 3000
app.listen(port)

console.log('Broceries GraphQL API server started on: ' + port);