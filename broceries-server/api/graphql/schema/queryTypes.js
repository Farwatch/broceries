import graphql, {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull,
    GraphQLID
} from 'graphql'
import { RecipeNameType, RecipeDetailType } from './recipeTypes'
import { recipeNameModel } from '../../models/recipeModels.js'

const queryType = new GraphQLObjectType({
    name: 'query',
    fields: () => {
        return {
            recipes: {
                type: new GraphQLList(RecipeNameType),
                resolve: () =>
                    // {
                    //     name: 'Gumbo no. 5',
                    //     id: 1
                    // },
                    // {
                    //     name: 'Some sewage',
                    //     id: 2
                    // },
                    // {
                    //     name: 'Purple Drank',
                    //     id: 3
                    // }
                    new Promise(
                        (resolve, reject) => {
                            recipeNameModel.find((err, recipeNames) => {
                                if (err) {
                                    reject(err)
                                } else {
                                    resolve(recipeNames)
                                }
                            })
                        }
                    )
            },
            recipe: {
                type: RecipeDetailType,
                args: {
                    id: {
                        name: 'recipeId',                    
                        type: new GraphQLNonNull(GraphQLID)
                    }
                },
                resolve: (root, { id }) => {
                    switch(id) {
                        case '1':
                            return {
                                name: 'Gumbo no. 5',
                                cookingTime: 5,
                                placeOfOrigin: 'Loubegaville',
                                ingredients: [
                                    'Monica',
                                    'Erica',
                                    'Tina',
                                    'Rita',
                                    'Sandra',
                                    'Mary',
                                    'Jessica',
                                    'YOU'
                                ]
                            }
                            break
                        case '2':
                            return {
                                name: 'Some sewage',
                                cookingTime: 120,
                                placeOfOrigin: 'The sewers',
                                ingredients: [
                                    'Used condom',
                                    'Balled up tissue',
                                    'Syringe',
                                    'Blinky'
                                ]
                            }
                            break
                        case '3':
                            return {
                                name: 'Purple Drank',
                                cookingTime: 1,
                                placeOfOrigin: 'Harlem or somewhere',
                                ingredients: [
                                    'Purple',
                                    'Drank'
                                ]
                            }
                            break
                        default:
                            return null
                    }
                }
            }
        }
    }
})

export default new GraphQLSchema({
    query: queryType
})