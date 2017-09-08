// @flow

import React from 'react'
import {Route, Switch} from 'react-router-dom'

import {Helmet} from 'react-helmet'

import asyncComponent from './asyncComponent'

class Routes extends React.Component {

    render() {
        return (
            <div>
                <Helmet htmlAttributes={{'lang': 'en'}} >
                    <meta charSet='utf-8' />
                    <title>Page title</title>
                    <meta name='description' content='meta desc' />
                    <link rel='canonical' href='https://url.com' />
                </Helmet>
                <Switch>
                    <Route exact path='/' component={BaseComponent}/>
                </Switch>
            </div>
        )
    }
}

const BaseComponent = asyncComponent(() => import(/* webpackChunkName: "Base" */ './App').then(module => module.default))

export default Routes