import mongoose from 'mongoose'

export const recipeNameModel = mongoose.model('RecipeName', {
    id: mongoose.Schema.Types.ObjectId,
    name: String
})

export const recipeDetailModel = mongoose.model('RecipeDetail', {
    name: String,
    cookingTime: Number,
    placeOfOrigin: String,
    ingredients: mongoose.Schema.Types.Array
})