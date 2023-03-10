import { FC } from "react";
import { StyledSection } from "../Style/StyledSection";
import { About } from "./../../components";
import Character from "../../public/static/images/character.png";
import Image from "next/image";

const Index: FC = () => {
  return (
    <StyledSection id="aboutme">
      <div className="section__content">
        <Image
          alt="vector illustration on girl"
          src={Character}
          layout="responsive"
        />
        <About />
      </div>
    </StyledSection>
  );
};

export default Index;
