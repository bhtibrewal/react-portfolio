import { FC } from "react";
import Fade from "react-reveal/Fade";
import { technologies } from "../data/technologies";
import { StyledSubSection } from "./Style/StyledHeader";
import { StyledSection } from "./Style/StyledSection";

const Technologies: FC = () => {
  return (
    <Fade right>
      <StyledSection className="section__content-skills">
        <header>
          <h3>Skills and Technologies</h3>
        </header>
        <div className="technologies">
          {technologies.map((tech, i) => (
            <div key={i} className="tech">
              {/* <span className="tech_tooltip">{tech.name}</span> */}
              <tech.Icon />
            </div>
          ))}
        </div>
      </StyledSection>
    </Fade>
  );
};

export default Technologies;
