import React from 'react'
import { render } from 'react-dom'

import { Provider } from 'react-redux'
import store from './app.store'

import { BrowserRouter } from 'react-router-dom'
import Routes from './app.routes'

import registerServiceWorker from './registerServiceWorker'

import './index.css'

const main = () => {
    render(
        <Provider store={store}>
            <BrowserRouter>
                <Routes />
            </BrowserRouter>
        </Provider>,
        document.getElementById('root')
    )
}

const checkDomLoaded = () => {
    if(document.getElementById('root') === null){
        //stupid code to make stupid IE work
        setTimeout(checkDomLoaded, 100)
    }else {
        main()
    }
}

checkDomLoaded()
registerServiceWorker()
