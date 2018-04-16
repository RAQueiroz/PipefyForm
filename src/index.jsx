import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import ApolloClient, { createNetworkInterface } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import { HttpLink } from 'apollo-link-http';
import Alert from 'react-s-alert';
import { InMemoryCache } from 'apollo-cache-inmemory'

import promise from 'redux-promise';
import logger from 'redux-logger';

import reducers from './reducer';

import Routes from './config/routes'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'

import '../node_modules/react-s-alert/dist/s-alert-default.css';
import '../node_modules/react-s-alert/dist/s-alert-css-effects/scale.css';
import './template/custom.css'

const store = applyMiddleware(logger, promise)(createStore)(reducers);


const client = new ApolloClient({
      link: new HttpLink({ uri: 'https://app.pipefy.com/public_api' }),
      cache: new InMemoryCache().restore(window.__APOLLO_STATE__),
});


class App extends Component {
    render() {
        return(
            <div>
            <ApolloProvider client={client}>
                <Provider store={store}>
                    <Routes />
                </Provider>

            </ApolloProvider>
             <Alert stack={{limit: 3}} />
             </div>
        )
    }
}

ReactDOM.render(<App/>, app)


