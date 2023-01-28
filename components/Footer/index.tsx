import { FC } from "react";
import { HomeLogo } from "..";
import { CgMail } from "react-icons/cg";
import { StyledFooter } from "./StyledFooter";
import Fade from "react-reveal/Fade";
import { socials } from "../../data/socials";
import { FiMail } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";

const Index: FC = () => {
  return (
    <Fade bottom>
      <StyledFooter>
        <div className="container">
          <section>
            <HomeLogo />
            <p>Thanks for checking my portfolio.</p>
            <p>
              Made with <FaRegHeart className="heart_icon" /> by Bhavika
            </p>
            <p>© copyright </p>
          </section>
          <section id="contact">
            <header>
              <h4>Contact Me</h4>
            </header>
            <ul className="footer__socials">
              {socials.map(({ Icon, href, label }, i) => (
                <li key={i}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`my ${label} profile`}
                  >
                    <Icon size={24} aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
            <p className="footer__contact-gmail">
              <a href="mailto:bhtibrewal@gmail.com">
                <figure aria-hidden="true">
                  <FiMail />
                </figure>
                <span>bhtibrewal@gmail.com</span>
              </a>
            </p>
          </section>
        </div>
      </StyledFooter>
    </Fade>
  );
};

export default Index;
