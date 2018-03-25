import React from 'react'

import styled from 'styled-components'

export default props => {

    const BoxDiv = styled.div`
        background: #fff;
        border-radius: 5px;
        -webkit-box-shadow: 0 2px 4px 0 rgba(192,208,230,0.5);
        box-shadow: 0 2px 4px 0 rgba(192,208,230,0.5);
        height: 170px;
        margin: 0 14px 14px 0;
        overflow: hidden;
        position: relative;
        width: 100%;
    `
    return (
        <BoxDiv>
            {props.children}
        </BoxDiv>
    )
}
