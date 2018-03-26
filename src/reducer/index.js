import { combineReducers } from 'redux'
import formReducer from '../reducer/form'

const rootReducer = combineReducers({
    form: formReducer
})

export default rootReducer;
