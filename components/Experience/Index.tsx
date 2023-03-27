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
        <div className="experience_details ">
          <p>
            I worked on the onboarding platform, contributing to the development
            of user-friendly interfaces that enabled smooth onboarding
            experiences for new users.
          </p>
          <p>
            Collaborated with the design and development team to implement new
            features, enhancements, and updates to the platform, ensuring a
            smooth and seamless development process.
          </p>
          <p>
            Stayed up-to-date with the latest frontend development trends and
            technologies like react-query, exploring new tools and frameworks
            that enhanced the onboarding platform&apos;s functionality and
            performance.
          </p>
        </div>
      </Fade>
    </StyledSection>
  );
};

export default Index;
