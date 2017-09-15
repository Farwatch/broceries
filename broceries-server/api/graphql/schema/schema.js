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

const query = new GraphQLObjectType({
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

const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addRecipe: {
            type: RecipeNameType,
            args: {
                name: { type: new GraphQLNonNull(GraphQLString) },
                cookingTime: { type: new GraphQLNonNull(GraphQLInt) },
                placeOfOrigin: { type: new GraphQLNonNull(GraphQLString) },
                ingredients: { type: new GraphQLList(GraphQLString) }
            },
            resolve: (parentValue, { name, cookingTime, placeOfOrigin, ingredients }) => 
                axios.post('http://localhost:3000/recipes', {
                    name,
                    cookingTime,
                    placeOfOrigin,
                    ingredients
                }).then(result => result.data)
        },
        deleteRecipe: {
            type: RecipeNameType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLID) }
            },
            resolve: (parentValue, { id }) => 
                axios.delete(`http://localhost:3000/recipes/${id}`)
                    .then(result => result.data)
        },
        editRecipe: {
            type: RecipeDetailType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLID) },
                name: { type: GraphQLString },
                cookingTime: { type: GraphQLInt },
                placeOfOrigin: { type: GraphQLString },
                ingredients: { type: new GraphQLList(GraphQLString) }
            },
            resolve: (parentvalue, { id, name, cookingTime, placeOfOrigin, ingredients }) =>
                axios.patch(`http://localhost:3000/recipes/${id}`, {
                    name,
                    cookingTime,
                    placeOfOrigin,
                    ingredients
                }).then(result => result.data)
        }
    }
})

export default new GraphQLSchema({
    query,
    mutation
})