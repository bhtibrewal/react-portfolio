import { FC } from "react";
import Fade from "react-reveal/Fade";
import { technologies } from "../data/technologies";
import { StyledSubSection } from "./Style/StyledHeader";

const Technologies: FC = () => {
  return (
    <Fade right>
      <StyledSubSection className="section__content-skills">
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
      </StyledSubSection>
    </Fade>
  );
};

export default Technologies;
