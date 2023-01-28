import Link from "next/link";
import { FC } from "react";
import { StyledHeader } from "./Style/StyledHeader";

const Header: FC = () => {
  return (
    <StyledHeader className="container header_container">
      <div className="header__content">
        <h1>
          <span className="header__greeting">Hello Friend! I&apos;m </span>
          <span className="header__name">Bhavika</span>
        </h1>
        <p className="header__intro">
          Frontend developer focused on creating interactive, accessible, and
          responsive websites.
        </p>
        <div className="header__links">
          <Link href="/#projects">
            <a className="btn__primary btn">See My Work</a>
          </Link>
          <a
            className="btn__secondary btn"
            href="https://drive.google.com/file/d/1K1PqKKs6tk2NJ7Rg1lhZKq37uFWEPPHd/view?usp=share_link"
            target="_blank"
            rel="noreferrer noopener"
          >
            View Resume
          </a>
        </div>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -10 100 120"
        width="213"
        className="image"
      >
        <title>Bhavika Tibrewal</title>

        <defs>
          <clipPath id="maskImage" clipPathUnits="userSpaceOnUse">
            <path d="M100 63A50 50 0 110 70C0 42 20 0 48 0c27 0 52 42 52 70z" />
          </clipPath>
          <clipPath id="maskBackground" clipPathUnits="userSpaceOnUse">
            <path d="M190 101a50 50 0 01-50 50 50 50 0 01-50-50 50 50 0 0150-50 50 50 0 0150 50z" />
          </clipPath>
        </defs>

        <g clip-path="url(#maskImage)" transform="translate(0 -7)">
          <image
            clip-path="url(#maskBackground)"
            width="120"
            height="150"
            x="70"
            y="25"
            href="https://res.cloudinary.com/bhtibrewal-cloud/image/upload/v1674476453/magenta-abstract-backgroundgradient-260nw-695065390_yeni6p.jpg"
            transform="translate(-90 -31)"
          />

          <image
            width="120"
            height="144"
            x="-13"
            y="-25"
            fill="none"
            className="image__foreground"
            href="https://res.cloudinary.com/bhtibrewal-cloud/image/upload/v1655642182/h5ghag2htpktqojdpbgl.png"
          />
        </g>
      </svg>
    </StyledHeader>
  );
};

export default Header;
