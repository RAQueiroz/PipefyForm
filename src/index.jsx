import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'
import './template/custom.css'

import Routes from './config/routes'
class App extends Component {
    render() {
        return(
            <div>
                <Routes />
            </div>
        )
    }
}

ReactDOM.render(<App/>, app)



