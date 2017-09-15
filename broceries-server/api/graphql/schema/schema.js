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
        },
        ingredients: {
            type: new GraphQLList(IngredientType),
            resolve: (parentValue, { id }) =>
                axios.get(`http://localhost:3000/ingredients`)
                    .then(response => response.data)
        },
        ingredient: {
            type: IngredientType,
            args: {
                id: {
                    name: 'ingredientId',
                    type: new GraphQLNonNull(GraphQLID)
                }
            },
            resolve: (parentValue, { id }) =>
                axios.get(`http://localhost:3000/ingredients/${id}`)
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
            ingredients: {
                type: new GraphQLList(IngredientType),
                resolve: (parentValue, args) => 
                    axios.get(`http://localhost:3000/recipes_ingredients?recipeId=${parentValue.id}`)
                        .then(response => response.data.map(obj => obj.ingredientId))
                        .then(ingredientIds => {
                            const queryParams = ingredientIds.reduce((prev, curr) => prev + `id=${curr}&`, '')
                            return axios.get(`http://localhost:3000/ingredients?${queryParams}`)
                                .then(response => response.data)
                        })
            }
        }
    }
})

const IngredientType = new GraphQLObjectType({
    name: 'Ingredient',
    fields: () => {
        return {
            id: { type: GraphQLID },
            name: { type: GraphQLString },
            category: { type: GraphQLString },
            recipes: { type: new GraphQLList(RecipeDetailType) }
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
            resolve: (parentValue, args) => 
                axios.post('http://localhost:3000/recipes', args)
                    .then(response => response.data)
        },
        deleteRecipe: {
            type: RecipeNameType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLID) }
            },
            resolve: (parentValue, { id }) => 
                axios.delete(`http://localhost:3000/recipes/${id}`)
                    .then(response => response.data)
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
            resolve: (parentvalue, args) =>
                axios.patch(`http://localhost:3000/recipes/${args.id}`, args)
                    .then(response => response.data)
        }
    }
})

export default new GraphQLSchema({
    query,
    mutation
})