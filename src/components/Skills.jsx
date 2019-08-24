import React from "react";
import styled, { keyframes } from "styled-components";
import H2Styled from '../styled/H2Styled'
const SkillsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr)
    grid-gap: 2rem;
    grid-row-gap: 0.5em;
`;

const SkillsH5 = styled.h5`
  margin: 0.5em 0;
`;

const SkillsLine = styled.div`
  height: 8px;
  position: relative;
  border-radius: 50px;
  background: #f8BBD0;
`;


const move = keyframes`
    0% { background-position: 0 0; }
    100% { background-position: 50px 50px; }
`;

const SkillsSpan = styled.span`
    display: block;
    height: 100%;
    width: ${props => props.width};
    border-radius: 8px;
    background-color: #C2185B;
    overflow: hidden;
    position: relative; 
    box-shadow: inset 0 2px 9px rgba(255, 255, 255, 0.3), inset 0 -2px 6px rgba(0,0,0,0.4);

    &:after {
        content: '';
        position: absolute;
        top: 0px;
        left: 0px;
        bottom: 0px;
        right: 0px;
        background-image: linear-gradient(-45deg, rgba(255, 255, 255, 0.2) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0.2) 75%, transparent 75%, transparent);
        z-index: 1;
        background-size: 50px 50px;
        overflow: hidden;
        animation: ${move} 4s linear infinite;
    }
`;

const Skills = props => {
  return (
    <div className="Skills">
      <H2Styled name="Skills"></H2Styled>
      <SkillsContainer>
        {props.data.map((element, index) => (
          <div className="Skills-item" key={`skill-${index}`}>
            <SkillsH5>{element.name}</SkillsH5>
            <SkillsLine>
              <SkillsSpan width={element.percentage}></SkillsSpan>
            </SkillsLine>
          </div>
        ))}
      </SkillsContainer>
    </div>
  );
};

export default Skills;
