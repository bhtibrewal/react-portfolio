import Link from "next/link";
import { FC } from "react";
import Fade from "react-reveal/Fade";
import { StyledSubSection } from "../Style/StyledHeader";

const About: FC = () => {
  return (
    <Fade left>
      <StyledSubSection className="section__content-about">
        <header className="section__header-main">
          <span className="section__header-main-count">01.</span>
          <h2 className="section__header-main-head">About Me</h2>
        </header>
        <p className="">
          I&apos;m a <strong>Frontend Developer</strong> whose whole interest is
          building interactive, accessible, and responsive websites. My project
          section contains some beautiful websites I&apos;ve built.
        </p>
        <p>
          I&apos;m currently open to Job opportunities where I can contribute to
          your business and make your users happy. Contact me if you&apos;re
          interested in having a taste of my skills.
        </p>
        <Link href="/#contact">
          <a className="btn btn__primary">Contact Me</a>
        </Link>
      </StyledSubSection>
    </Fade>
  );
};

export default About;
