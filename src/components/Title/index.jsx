import React from 'react'
import styled from 'styled-components'

const H1 = props => {
    const CustomH1 = styled.h1`
        color:${props.color};
        font-size: 1.8rem;
        font-weight:700;
    `
    return(
        <CustomH1>{props.text}</CustomH1>
    )
}

export {H1}