import React from 'react'
import styled from 'styled-components'

export default props => {
    const Text = styled.p`
        color:#405667;
        font-weight:600;
    `
    return(
        <Text>{props.children}</Text>
    )
}
