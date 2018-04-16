import React, { Component } from 'react';
import Alert from 'react-s-alert';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import { graphql, compose } from 'react-apollo'
import {ptBr} from 'moment/locale/pt-br';
import {RadioGroup, Radio} from 'react-radio-group'
import gql from 'graphql-tag'
import { changeName,
        changeAddExperience,
        changeBio,
        changeJSLibrary,
        changeSkill,
        changeStartDate
     } from '../../actions/form';

import Box from '../../components/Box'
import Grid from '../../components/Grid'
import { H1 } from '../../components/Title'
import Text from '../../components/Text'

const FormQuery = gql`
{
    publicForm(formId: "1lf_E0x4") {
      publicFormSettings {
        organizationName
        submitButtonText
        title
      }

      formFields {
        ...on ShortTextField {
          id
          label
        }
        ...on LongTextField {
          id
          label
        }
        ...on SelectField {
          id
          label
          options
        }
        ...on RadioVerticalField {
          id
          label
          options
        }
        ...on ChecklistVerticalField {
          id
          label
          options
        }
        ...on DateField {
          id
          label
        }
        __typename
      }
    }
}
`

const sendForm = gql`
    mutation sendform($input: SubmitPublicFormInput!){
    submitPublicForm(input: $input) {
      repoItem {
        id
        title
      }
    }
  }
`

class TodoForm extends Component {

    constructor(props){
        super(props);
        this.state={
            date: moment()
        }
        this.handleSave = this.handleSave.bind(this);
    }

    handleSave(){
        const { bio, name, skill, jsLibrary, startDate, addExperience } = this.props;
        if( bio === '' || name === '' || skill === '' || jsLibrary === '' || startDate === '' || addExperience === '') {
            Alert.error('Preencha todos os campos do formulário', {
                position: 'top',
                effect: 'scale',
                timeout: 'none'
            })
        } else {
            let input = {
                formId: "1lf_E0x4",
                filledFields: [
                    {
                        fieldId: "your_name",
                        fieldValue: this.props.name
                    },
                    {
                        fieldId: "your_bio",
                        fieldValue: this.props.bio
                    },
                    {
                        fieldId: "primary_skill",
                        fieldValue: 'eee'
                    },
                    {
                        fieldId: "javascript_library_of_choice",
                        fieldValue: this.props.jsLibrary
                    },
                    {
                        fieldId: "additional_experience",
                        fieldValue: this.props.addExperience
                    },
                    {
                        fieldId: "start_date",
                        fieldValue: this.props.startDate
                    }
                ]
            }
            this.props.mutate({variables: {input}})
            .then((data) => {
                Alert.success('Form enviado com sucesso', {
                    position: 'top',
                    effect: 'scale',
                    timeout: 'none'
                })
            })
            .catch((err) => {
                let errResult = JSON.parse(JSON.stringify(err))
                    Alert.error(err.message, {
                        position: 'top',
                        effect: 'scale',
                        timeout: 'none'
                    })

            })
        }
    }

    render(){
        if(this.props.data.publicForm){
        const { bio, name, skill, jsLibrary, startDate, addExperience } = this.props;
        const { publicForm } = this.props.data;
        return(
            <div className="row">
                <Grid cols="12 12 4 4">
                    <Box>
                        <H1
                            color="#1a8ffb"
                            text={publicForm.publicFormSettings.organizationName}
                        />
                        <H1
                            color="#2f475c"
                            text={publicForm.publicFormSettings.title}
                        />
                    </Box>
                </Grid>
                <Grid cols="12 12 8 8">
                <Box>
                <div className="form-group">
                            <label><Text>{publicForm.formFields[0].label}</Text></label>
                            <input
                                className="form-control"
                                id={publicForm.formFields[0].id}
                                onChange={this.props.changeName}
                                value = {name}
                            />
                        </div>
                        <div className="form-group">
                            <label><Text>{publicForm.formFields[1].label}</Text></label>
                            <textarea
                                className="form-control"
                                id={publicForm.formFields[1].id}
                                onChange={this.props.changeBio}
                                value={ bio }
                            />
                        </div>
                        <div className="form-group">
                            <label><Text>{publicForm.formFields[2].label}</Text></label>
                            <select
                                id={publicForm.formFields[2].label}
                                className="form-control"
                                value= { skill }
                                onChange={this.props.changeSkill}
                            >
                            {publicForm.formFields[2].options.map((option) =>
                                <option value={option}>{option}</option>
                            )}
                            </select>
                        </div>
                        <div className="form-group">
                            <label><Text>{publicForm.formFields[3].label}</Text></label>
                            <RadioGroup
                                name="jslibrary"
                                selectedValue={jsLibrary}
                                onChange={this.props.changeJSLibrary}
                            >
                                {publicForm.formFields[3].options.map((option) =>
                                    <p><Radio value={option}/>{option}</p>
                                )}
                            </RadioGroup>
                        </div>
                        <div className="form-group">
                            <label><Text>{publicForm.formFields[4].label}</Text></label>
                            {publicForm.formFields[4].options.map((option) =>
                                <p> <input  onChange={this.props.changeAddExperience} type="checkbox" value={option}/>{option}</p>
                            )}
                        </div>
                        <div className="form-group">
                            <label><Text>{publicForm.formFields[5].label}</Text></label>
                            <DatePicker
                                id={publicForm.formFields[5].id}
                                selected={startDate ? moment(startDate) : moment()}
                                onChange={date => this.props.changeStartDate(moment(date).format())}
                                locale={'ptBr'}
                            />
                        </div>
                        <button type="submit" onClick={this.handleSave} className="btn btn-primary">Submit</button>
                </Box>
                </Grid>

            </div>
        )
        }else{
            return(
                <p>Carregando...</p>
            )
        }
    }
}

const mapStateToProps = state => ({
    name: state.form.name,
    bio: state.form.bio,
    skill: state.form.skill,
    jsLibrary: state.form.jsLibrary,
    addExperience: state.form.addExperience,
    startDate: state.form.startDate,
})

const mapDispatchToProps = dispatch =>
    bindActionCreators ({ changeName, changeAddExperience, changeBio, changeJSLibrary, changeSkill, changeStartDate }, dispatch)


const FormWithGraphql = compose(
        graphql(FormQuery),
        graphql(sendForm)
)(TodoForm);

export default connect(mapStateToProps, mapDispatchToProps)(FormWithGraphql);
