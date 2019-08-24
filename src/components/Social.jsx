import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faTwitterSquare,
  faGithubSquare,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";

const SocialStyle = styled.div`
  margin: 0 auto;
  display: block;
`;

const SocialUl = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const SocialLi = styled.li`
  display: inline;
  margin: 0 1em 0 0;
`;

const SocialAnchor = styled.a`
  color: #212121;
  decorator: none;
  font-size: 1.2em;
`;

const SocialIcon = styled.span`
  color: ${props => props.theme.color};
`;

const facebook = {
  color: "#3b5998"
};

const twitter = {
  color: "#38A1F3"
};

const linkedin = {
  color: "#0e76a8"
};

const github = {
  color: "#333"
};

const getColor = name => {
  if (name === "facebook") {
    return facebook;
  } else if (name === "twitter") {
    return twitter;
  } else if (name === "linkedin") {
    return linkedin;
  } else if (name === "github") {
    return github;
  } else {
    return {
      color: "red"
    };
  }
};

const Social = props => {
  return (
    <SocialStyle>
      {props.social && (
        <SocialUl>
          {props.social.map((item, index) => (
            <SocialLi key={`social-${index}`} target="_blank">
              <SocialAnchor href={item.url}>
                <ThemeProvider theme={getColor(item.name)}>
                  <SocialIcon className={item.name}>
                    {item.name === "facebook" && (
                      <FontAwesomeIcon icon={faFacebookSquare} />
                    )}
                    {item.name === "twitter" && (
                      <FontAwesomeIcon icon={faTwitterSquare} />
                    )}
                    {item.name === "github" && (
                      <FontAwesomeIcon icon={faGithubSquare} />
                    )}
                    {item.name === "linkedin" && (
                      <FontAwesomeIcon icon={faLinkedin} />
                    )}
                  </SocialIcon>
                </ThemeProvider>
              </SocialAnchor>
            </SocialLi>
          ))}
        </SocialUl>
      )}
    </SocialStyle>
  );
};

export default Social;
