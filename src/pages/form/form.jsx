import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import {ptBr} from 'moment/locale/pt-br';
import {RadioGroup, Radio} from 'react-radio-group'
import { changeName, changeAddExperience, changeBio, changeJSLibrary, changeSkill, changeStartDate } from '../../actions/form';

import Box from '../../components/Box'
import Grid from '../../components/Grid'
import { H1 } from '../../components/Title'
import Text from '../../components/Text'

class TodoForm extends Component {

    constructor(props){
        super(props);
        this.state={
            date: moment()
        }
    }

    render(){
        const { bio, name, skill, jsLibrary, startDate } = this.props;
        return(
            <div className="row">
                <Grid cols="12 12 4 4">
                    <Box>
                        <H1
                            color="#1a8ffb"
                            text="Pipefy Recruitment Test"
                        />
                        <H1
                            color="#2f475c"
                            text="Recruitment Survey"
                        />
                    </Box>
                </Grid>
                <Grid cols="12 12 8 8">
                <Box>
                <div className="form-group">
                            <label for="name"><Text>Your Name:</Text></label>
                            <input
                                type="name"
                                className="form-control"
                                id="name"
                                onChange={this.props.changeName}
                                value = {name}
                            />
                        </div>
                        <div className="form-group">
                            <label for="bio"><Text>Your Bio:</Text></label>
                            <textarea
                                type="password"
                                className="form-control"
                                id="bio"
                                onChange={this.props.changeBio}
                                value={ bio }
                            />
                        </div>
                        <div className="form-group">
                            <label for="skill"><Text>Primary Skill:</Text></label>
                            <select
                                id="skill"
                                className="form-control"
                                value= { skill }
                                onChange={this.props.changeSkill}
                            >
                                <option value="skill1">Skill 1</option>
                                <option value="skill2">Skill 2</option>
                                <option value="skill3">Skill 3</option>
                                <option value="skill4">Skill 4</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label><Text>Javascript library of choice:</Text></label>
                            <RadioGroup
                                name="jslibrary"
                                selectedValue={jsLibrary}
                                onChange={this.props.changeJSLibrary}
                            >
                                <Radio value="react" />React
                                <br/>
                                <Radio value="angular" />Angular
                                <br/>
                                <Radio value="vue" />Vue
                            </RadioGroup>
                        </div>
                        <div className="form-group">
                            <label><Text>Addtional Experience:</Text></label>
                            <br/>
                            <input type="checkbox" name="tdd" value="tdd"/> TDD
                            <br/>
                            <input type="checkbox" name="heroku" value="heroku"/> Heroku<br/>
                            <input type="checkbox" name="github" value="github"/> Github<br/>
                        </div>
                        <div className="form-group">
                            <label><Text>Start Date:</Text></label>
                            <DatePicker
                                selected={startDate ? moment(startDate) : moment()}
                                onChange={date => this.props.changeStartDate(moment(date).format())}
                                locale={'ptBr'}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                </Box>
                </Grid>

            </div>
        )
    }
}

const mapStateToProps = state => ({
    name: state.form.name,
    bio: state.form.bio,
    skill: state.form.skill,
    jsLibrary: state.form.jsLibrary,
    addExperience: state.form.addExperience,
    startDate: state.form.startDate

})

const mapDispatchToProps = dispatch =>
    bindActionCreators ({ changeName, changeAddExperience, changeBio, changeJSLibrary, changeSkill, changeStartDate }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
