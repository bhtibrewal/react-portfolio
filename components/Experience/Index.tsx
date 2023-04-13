import { FC } from "react";
import { StyledSection } from "../Style/StyledSection";
import Fade from "react-reveal/Fade";

const Index: FC = () => {
  return (
    <StyledSection id="experience">
      <Fade left>
        <header className="section__header-main">
          <span className="section__header-main-count">01.</span>
          <h2 className="section__header-main-head">Experience</h2>
        </header>

        <h3>Forntend Developer @Rupifi </h3>
        <p>Sept&apos;22 - Present</p>
        <ul className="experience_details ">
          <li>
            I worked on the onboarding platform and developed user-friendly
            interfaces that enhanced onboarding experiences for new users by
            30%.
          </li>
          <li>
            Collaborated with the design and backend team to develop and
            implement front architecture for user-facing features used by over
            20k users.
          </li>
          <li>
            Stayed up-to-date with the latest tools and frameworks like react-
            query, jotai that enhanced the onboarding platform&apos;s
            functionality and performance by over 50%.
          </li>
          <li>
            Understanding the business logic to deliver the technical
            requirements and debugging the issues faced by users. Working on the
            development cycle of the project from CI/CD to deployment.
          </li>
        </ul>
      </Fade>
    </StyledSection>
  );
};

export default Index;
