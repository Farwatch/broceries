import graphql, {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLInt,
    GraphQLList
} from 'graphql'

export const RecipeNameType = new GraphQLObjectType({
    name: 'recipeName',
    fields: () => ({
        id: {
            type: GraphQLID
        },
        name: {
            type: GraphQLString
        }
    })
})

export const RecipeDetailType = new GraphQLObjectType({
    name: 'recipeDetail',
    fields: () => ({
        name: {
            type: GraphQLString
        },
        cookingTime: {
            type: GraphQLInt
        },
        placeOfOrigin: {
            type: GraphQLString
        },
        ingredients: {
            type: new GraphQLList(GraphQLString)
        }
    })
})