import React, {Component} from 'react'
import styled from 'styled-components'

const BoxDiv = styled.div`
    background: #fff;
    border-radius: 5px;
    -webkit-box-shadow: 0 2px 4px 0 rgba(192,208,230,0.5);
    box-shadow: 0 2px 4px 0 rgba(192,208,230,0.5);
    margin: 0 14px 14px 0;
    overflow: hidden;
    position: relative;
    width: 100%;
    padding:30px;
`

class Box extends Component{

    render(){
        return (
            <BoxDiv>
                {this.props.children}
            </BoxDiv>
        )
    }
}

export default Box;
