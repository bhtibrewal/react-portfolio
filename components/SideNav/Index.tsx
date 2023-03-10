import React, { FC } from "react";
import { socials } from "../../data/socials";
import { StyledSideNav } from "../Style/StyledSideNav";

const Index: FC = () => {
  return (
    <StyledSideNav className="side_nav">
      {socials.map(({ Icon, href, label }, i) => (
        <li key={i}>
          <a href={href} target="_blank" rel="noreferrer">
            <Icon size={24} aria-hidden="true" />
          </a>
          <label>{label}</label>
        </li>
      ))}
    </StyledSideNav>
  );
};

export default Index;
