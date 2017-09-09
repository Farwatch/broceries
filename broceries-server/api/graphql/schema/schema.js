import graphql, {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLID,
    GraphQLString,
    GraphQLInt,
    GraphQLList,
    GraphQLNonNull
} from 'graphql'
import axios from 'axios'
// import { recipeNameModel } from '../../models/recipeModels.js'

const queryType = new GraphQLObjectType({
    name: 'Query',
    fields: () => ({
        recipes: {
            type: new GraphQLList(RecipeNameType),
            resolve: () =>
                axios.get(`http://localhost:3000/recipes`)
                    .then(response => response.data)
        },
        recipe: {
            type: RecipeDetailType,
            args: {
                id: {
                    name: 'recipeId',                    
                    type: new GraphQLNonNull(GraphQLID)
                }
            },
            resolve: (parentValue, { id }) =>
                axios.get(`http://localhost:3000/recipes/${id}`)
                    .then(response => response.data)
        }
    })
})

const RecipeNameType = new GraphQLObjectType({
    name: 'RecipeName',
    fields: () => {
        return {
            id: { type: GraphQLID },
            name: { type: GraphQLString },
        }
    }
})

const RecipeDetailType = new GraphQLObjectType({
    name: 'RecipeDetail',
    fields: () => {
        return {
            id: { type: GraphQLID },
            name: { type: GraphQLString },
            cookingTime: { type: GraphQLInt },
            placeOfOrigin: { type: GraphQLString },
            ingredients: { type: new GraphQLList(GraphQLString) }
        }
    }
})

export default new GraphQLSchema({
    query: queryType
})