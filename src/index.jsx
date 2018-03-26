import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'
import './template/custom.css'

import promise from 'redux-promise';
import logger from 'redux-logger';

import reducers from './reducer';

import Routes from './config/routes'

const store = applyMiddleware(logger, promise)(createStore)(reducers);

class App extends Component {
    render() {
        return(
            <Provider store={store}>
                <Routes />
            </Provider>
        )
    }
}

ReactDOM.render(<App/>, app)


