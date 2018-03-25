import React, {Component} from 'react'

import Box from '../../components/Box'
import Grid from '../../components/Grid'
import { H1 } from '../../components/Title'
import Text from '../../components/Text'

class Form extends Component {
    render(){
        return(
            <div className="container">
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
                    <form action="/action_page.php">
                        <div className="form-group">
                            <label for="name"><Text>Your Name:</Text></label>
                            <input type="name" className="form-control" id="name"/>
                        </div>
                        <div className="form-group">
                            <label for="bio"><Text>Your Bio:</Text></label>
                            <textarea type="password" className="form-control" id="bio"/>
                        </div>
                        <div className="form-group">
                            <label for="skill"><Text>Primary Skill:</Text></label>
                            <select id="skill"className="form-control">
                                <option value="skill1">Skill 1</option>
                                <option value="skill2">Skill 2</option>
                                <option value="skill3">Skill 3</option>
                                <option value="skill4">Skill 4</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label><Text>Javascript library of choice:</Text></label>
                            <br/>
                            <input type="radio" name="jslibrary" value="react"/> React
                            <br/>
                            <input type="radio" name="jslibrary" value="angular"/> Angular<br/>
                            <input type="radio" name="jslibrary" value="vue"/> Vue<br/>
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
                            <input type="date" className="form-control" id="date"/>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                    </Box>
                </Grid>

                </div>
            </div>
        )
    }
}

export default Form
