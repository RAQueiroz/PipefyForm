import { NAME_CHANGED, BIO_CHANGED, ADDTIONALLEXPERIENCE_CHANGED, JSLIBRARY_CHANGED, SKILL_CHANGED, STARTDATE_CHANGED } from '../actions/form'

const INITIAL_STATE = {
    name:'',
    bio: '',
    skill: '',
    jsLibrary: '',
    startDate: ''
}

export default ( state = INITIAL_STATE, action) => {
     switch(action.type) {
        case NAME_CHANGED:
            return {
                ...state,
                name: action.payload
            }
        case BIO_CHANGED:
            return {
                ...state,
                bio: action.payload
            }

        case SKILL_CHANGED:
            return {
                ...state,
                skill: action.payload
            }
        case JSLIBRARY_CHANGED:
            return {
                ...state,
                jsLibrary: action.payload
            }
        case STARTDATE_CHANGED:
            return {
                ...state,
                startDate: action.payload
            }
        default:
             return state
     }
 }
