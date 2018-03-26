import axios from 'axios';
const URL = 'http://localhost:3003/api/todos';

export const NAME_CHANGED =  'NAME_CHANGED';
export const BIO_CHANGED =  'BIO_CHANGED';
export const SKILL_CHANGED =  'SKILL_CHANGED';
export const JSLIBRARY_CHANGED =  'JSLIBRARY_CHANGED';
export const ADDTIONALLEXPERIENCE_CHANGED =  'ADDTIONALLEXPERIENCE_CHANGED';
export const STARTDATE_CHANGED =  'STARTDATE_CHANGED';


export const changeName = event => ({
    type: NAME_CHANGED,
    payload: event.target.value
});

export const changeBio = event => ({
    type: BIO_CHANGED,
    payload: event.target.value
});

export const changeSkill = event => ({
    type: SKILL_CHANGED,
    payload: event.target.value
});

export const changeJSLibrary = value => ({
    type: JSLIBRARY_CHANGED,
    payload: value
});

export const changeAddExperience = event => ({
    type: ADDTIONALLEXPERIENCE_CHANGED,
    payload: event.target.value
});

export const changeStartDate = value => ({
    type: STARTDATE_CHANGED,
    payload: value
});

