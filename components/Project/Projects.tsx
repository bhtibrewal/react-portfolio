import { FC } from "react";
import { default as Project } from "./Index";
import { projects } from "../../data/projects";
import { StyledProjects } from "./StyledProjects";
import { StyledSection } from "../Style/StyledSection";
import Fade from "react-reveal/Fade";

const Projects: FC = () => {
  return (
    <StyledSection id="projects" aria-label="Projects' Section">
      <Fade top>
        <header className="section__header-main">
          <span className="section__header-main-count">02.</span>
          <h2 className="section__header-main-head"> PROJECTS</h2>
        </header>
      </Fade>

      <StyledProjects>
        {projects.map((project, i) => (
          <Project key={i} {...project} id={i} />
        ))}
      </StyledProjects>
    </StyledSection>
  );
};

export default Projects;
