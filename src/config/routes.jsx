import React from 'react'
import { HashRouter as Router,Route,Switch } from 'react-router-dom'
import Form from '../pages/form';

export default props => (
    <Router>
        <Switch>
        <Route  exact path='/' component={Form}/>
        <Route exact path='/form' component={Form}/>
        </Switch>
	</Router>

)
