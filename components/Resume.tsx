import { FC } from "react";
import { AiOutlineFilePdf } from "react-icons/ai";
import { StyledResume } from "./Style/StyledResume";

const Resume: FC = () => {
  return (
    <StyledResume
      href="https://drive.google.com/file/d/1elsW4Ra1PXIkaWNiqOsb2yC0hn2lfGL8/view?usp=share_link"
      target="_blank"
      rel="noreferrer noopener"
    >
      <span>check my resume</span>
      <figure aria-hidden="true">
        <AiOutlineFilePdf />
      </figure>
    </StyledResume>
  );
};

export default Resume;
