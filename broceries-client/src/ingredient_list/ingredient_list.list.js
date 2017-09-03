// @flow
import React from 'react'
import SingleIngredient from './ingredient_list.single_ingredient.js'

import type {Ingredient} from './ingredient_list.types'

const IngredientList = ({ list }: { list: Array<Ingredient> }) => {
    return (
        <div>
            {buildListOfIngredientElements(list)}
        </div>
    )
} 

const buildListOfIngredientElements = (list: Array<Ingredient>) => {
    return list ? list.map((ing, index) => <SingleIngredient ingredient={ing} key={index}/>) : undefined
}

export default IngredientList