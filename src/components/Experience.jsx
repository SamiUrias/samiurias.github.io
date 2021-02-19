import React from "react";
import H2Styled from "../styled/H2Styled";
import H3Styled from "../styled/H3Styled";
import PStyled from "../styled/PStyled";


const Experience = props => {
  return (
    <div className="Experience">
        <H2Styled name="Experience"></H2Styled>
      <div className="Experience-container">
        {props.data.map((element, index) => 
          <div className="Experience-item" key={`exp-${index}`}>
            <H3Styled>
              {element.jobTitle} {element.company}
            </H3Styled>
            <span>
              {element.startDate} -- {element.endDate}
            </span>
            <PStyled>{element.jobDescription}</PStyled>
          </div>
        )}
      </div>
    </div>
  );
};

export default Experience;
