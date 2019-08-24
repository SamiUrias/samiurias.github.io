import React from "react";
import H2Styled from "../styled/H2Styled";
import H3Styled from "../styled/H3Styled";
import PStyled from "../styled/PStyled";


const Certificates = props => {
  return (
    <div className="Certificates">
        <H2Styled name="Certificates"></H2Styled>
      <div className="Certificates-container">
        {props.data.map((element, index) => (
          <div className="Certificate-element" key={`cert-${index}`}>
            <H3Styled>
              {element.name} | {element.institution}
            </H3Styled>
            <span>{element.date}</span>
            <PStyled>{element.description}</PStyled>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
