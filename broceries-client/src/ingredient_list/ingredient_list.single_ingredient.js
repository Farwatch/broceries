// @flow
import React from 'react'

import type {Ingredient} from './ingredient_list.types'

const SingleIngredient = ({ ingredient }: { ingredient: Ingredient }) => {
    return (
        <span>
            <span>{ingredient.name}</span>
        </span>
    )
}

export default SingleIngredient