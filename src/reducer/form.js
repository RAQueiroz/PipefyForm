import { NAME_CHANGED,
        BIO_CHANGED,
        ADDTIONALLEXPERIENCE_CHANGED,
        JSLIBRARY_CHANGED,
        SKILL_CHANGED,
        STARTDATE_CHANGED,
    } from '../actions/form'
import { addTypenameToDocument } from 'apollo-utilities';

const INITIAL_STATE = {
    name:'',
    bio: '',
    skill: 'Structured Programming',
    jsLibrary: '',
    startDate: '16/04/2018',
    addExperience: []
}

const removeFromArr = (arr, item) => {
    var index = arr.indexOf(item);
    if (index > -1) {
        arr.splice(index, 1);
    }

    return arr
}

const moreExperience = (experiences, newExperience) => {
    let newArr = experiences;

    !experiences.includes(newExperience) ? newArr.push(newExperience) : newArr = removeFromArr(newArr, newExperience)

    return newArr
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
        case ADDTIONALLEXPERIENCE_CHANGED:
            return {
                ...state,
                addExperience: moreExperience(state.addExperience, action.payload)
            }
        default:
             return state
     }
 }
