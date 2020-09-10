import React from 'react'
import styled from 'styled-components'

const StyledH2 = styled.h2`
    font-family: 'Roboto', sans-serief;
    font-weight: 300;
    letter-spacing: 0.8px;
    margin: 1em 0 0 0;
    color: #c2185b;
`;


const H2Styled = ({name}) => <StyledH2>{name}</StyledH2>

export default H2Styled;