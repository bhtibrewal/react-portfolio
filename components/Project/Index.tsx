import { FC, MouseEventHandler, useRef, useState } from "react";
import { Project } from "../../interface";
import { StyledProject } from "./StyledProject";
import Image from "next/image";

const Index: FC<Project> = ({
  heading,
  paragraphs,
  tech,
  live,
  source,

  image,
  name,
}) => {
  const projectRef = useRef<null | HTMLElement>(null);
  const [showPreview, setShowPreview] = useState(false);

  const handlePreview: MouseEventHandler<HTMLButtonElement> = () => {
    setShowPreview((prev) => !prev);
    let projectContainer = projectRef.current!;

    // scroll screen to place attention on the preview video when user wants to check preview
    if (!showPreview) projectContainer.scrollIntoView(false);
  };

  return (
    <StyledProject>
      <article ref={projectRef}>
        <div className="project__figures">
          <Image src={image} alt={`${name}'s screenshot`} layout="responsive" />
          <div className="project__btn__bg">
            <a
              className="btn btn__primary "
              href={live}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live
            </a>
          </div>
        </div>
        <section className="project__details">
          <header>
            <h3>{heading}</h3>
          </header>

          {/* <ul aria-label="technologies used" className="technologies">
            {tech.map((t) => (
              <li key={t} className="tech">
                {t}
              </li>
            ))}
          </ul> */}
          <div className="project__links">
            <a
              className="btn btn__secondary"
              href={source}
              target="_blank"
              rel="noopener noreferrer"
            >
              Source
            </a>
          </div>
        </section>
      </article>
    </StyledProject>
  );
};

export default Index;
