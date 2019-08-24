import React from "react";
import Social from "./Social";
import styled from "styled-components";

const AboutStyle = styled.div`
  text-align: center;
`;

const AboutAvtar = styled.div`
  padding: 2em 0 0 0;
`;

const AboutImg = styled.img`
  border: 2px solid #e91e;
  border-radius: 100%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0, 0.6);
  display: block;
  width: 160px;
  heigth: 16px;
  margin: 0 auto;
`;

const AboutName = styled.div`
  text-align: center;
`;

const AboutH2 = styled.h2`
  font-family: "Roboto", sans-serief;
  font-weight: 400;
  letter-spacing: 1.2px;
  margin: 0.5em 0 0 0;
  color: #c2185b;
`;

const AboutProfession = styled.p`
  color: #c2185b;
  font-weigth: 300;
  letter-spacing: 1.6px;
  margin: 0.2em 0 1em 0;
`;

const AboutBio = styled.p`
  color: #757575;
  font-size: 1em;
  font-weigth: 300;
`;

const AboutLocation = styled.p`
  color: #757575;
  font-size: 1em;
  font-weigth: 400;
`;

const About = ({
  avatar,
  name,
  profession,
  bio,
  address,
  social,
  children
}) => {
  return (
    <AboutStyle>
      <div className="About-container">
        <AboutAvtar>
          <figure>
            <AboutImg src={avatar} alt={name} />
          </figure>
        </AboutAvtar>

        <AboutName>
          <AboutH2>{name}</AboutH2>
        </AboutName>

        <div className="About-profession">
          <AboutProfession>{profession}</AboutProfession>
        </div>

        <div className="About-description">
          <AboutBio>{bio}</AboutBio>
        </div>

        <div className="About-location">
          <AboutLocation>{address}</AboutLocation>
        </div>

        <div className="About-social">
          <Social social={social} />
        </div>
      </div>
    </AboutStyle>
  );
};

export default About;
