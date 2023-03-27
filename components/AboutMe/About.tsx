import Link from "next/link";
import { FC } from "react";
import Fade from "react-reveal/Fade";
import { StyledSubSection } from "../Style/StyledHeader";

const About: FC = () => {
  return (
    <Fade left>
      <StyledSubSection className="section__content-about">
        <header className="section__header-main">
          <span className="section__header-main-count">02.</span>
          <h2 className="section__header-main-head">About Me</h2>
        </header>
        <p>
          I&apos;m a <strong>Frontend Developer</strong> whose whole interest is
          building interactive, accessible, and responsive websites. My project
          section contains some beautiful websites I&apos;ve built.
        </p>
        <p>
          I have always been an active open-source contributor and have made
          some significant contributions, you can find them on my{" "}
          <a className="btn btn_secondary" href="https://github.com/bhtibrewal">
            Github
          </a>
        </p>
        <p>
          I&apos;m currently looking into new opportunities where I can
          contribute, aid in business growth, and affect positive change.
          Contact me if you have a challenge for me.
        </p>
        <Link href="/#contact">
          <a className="btn btn__primary">Contact Me</a>
        </Link>
      </StyledSubSection>
    </Fade>
  );
};

export default About;
