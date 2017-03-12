import React, { PropTypes } from 'react'
import ReactDOM from 'react-dom'
import 'isomorphic-fetch'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {recipes : []}
    }

    componentDidMount() {
        fetch('/recipes/name')
            .then(
                response => {
                    if (response.status === 200) {
                        return response
                    }
                    else {
                        let error = new Error(`API Fetch failed \'${response.url}\' [status=${response.status}]`)
                        error.response = response
                        return Promise.reject(error)
                    }
                }
            ).then(
                response => this.setState({recipes : response.json()})
            ).catch(
                error => { throw error }
            )
    }

    render() {
        return (
            <Recipe data={this.state.recipes[0]} />
        )
    }
}

class Recipe extends React.Component {
    render() {
        return (
            <div>
                <div>names</div>
                <div>ingredients</div>
                <div>cooking time</div>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('react')
)