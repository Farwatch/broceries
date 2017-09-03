// @flow
import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import IngredientList from './ingredient_list/ingredient_list.list'
import type {Ingredient} from './ingredient_list/ingredient_list.types'

// $FlowFixMe
class App extends Component {
    render() {
        const list : Array<Ingredient> = [{name: 'Spaghetti'}, {name: 'Beef mince'}]
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                    <IngredientList list={list} />
                </p>
            </div>
        )
    }
}

export default App
