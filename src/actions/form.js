import axios from 'axios';
const URL = 'https://app.pipefy.com/public_api';

export const NAME_CHANGED =  'NAME_CHANGED';
export const BIO_CHANGED =  'BIO_CHANGED';
export const SKILL_CHANGED =  'SKILL_CHANGED';
export const JSLIBRARY_CHANGED =  'JSLIBRARY_CHANGED';
export const ADDTIONALLEXPERIENCE_CHANGED =  'ADDTIONALLEXPERIENCE_CHANGED';
export const STARTDATE_CHANGED =  'STARTDATE_CHANGED';


export const changeName = event => {
    const teste = "{'query': '{publicForm(formId: '1lf_E0x4') {publicFormSettings {organizationName submitButtonText title} formFields { ...on ShortTextField {id label } ...on LongTextField { id label } ...on SelectField { id label options} ...on RadioVerticalField {id label options } ...on ChecklistVerticalField { id label options } ...on DateField { id label } __typename}}}'}"

    axios.post(URL,teste,{
        headers: {
            'Content-Type': 'application/json',
        }
    }).then(res => console.log(res))
    return({

    type: NAME_CHANGED,
    payload: event.target.value
})};

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

