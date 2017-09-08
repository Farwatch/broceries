import { createStore , applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import reducers from 'app.reducers'

const buildStore = () => {
    let middlewares = [thunkMiddleware]

    if (process.env.NODE_ENV === 'dev') {
        let invariantMiddleware = require('redux-immutable-state-invariant').default
        middlewares = middlewares.concat(invariantMiddleware())
        return createStore(reducers, composeWithDevTools(applyMiddleware(...middlewares)))
    } else {
        return createStore(reducers, applyMiddleware(...middlewares))
    }
}

export default buildStore()
