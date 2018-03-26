import React, { Component} from 'react';
import Form from './form'

export default class FormPage extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <div className='container'>
                <Form />
                </div>
            </div>
        )
    }
}
