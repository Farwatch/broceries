import { combineReducers } from 'redux'
import ingredientListReducers from 'ingredient_list/ingredient_list.reducer'

export default combineReducers({
    ingredientList: ingredientListReducers
})