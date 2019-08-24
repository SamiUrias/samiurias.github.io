import React from "react";
import H2Styled from "../styled/H2Styled";
import H3Styled from "../styled/H3Styled";
import PStyled from "../styled/PStyled";

const Education = props => {
  return (
    <div className="Education">
      <H2Styled name="Education" />
      <div className="Education-container">
        {props.data.map((element, index) => (
          <div className="Education-item" key={`edu-${index}`}>
            <H3Styled>
              {element.degree} {element.insitutuion}
              <span>
                {element.startDate} - {element.endDate}
              </span>
            </H3Styled>

            <PStyled name={element.description} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
