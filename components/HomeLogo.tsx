import { FC } from "react";
import Link from "next/link";
import { StyledHomeLogo } from "./Style";

const HomeLogo: FC = () => {
  return (
    <Link href="/" passHref>
      <StyledHomeLogo aria-label="Olaleye Blessing's Site logo" translate="no">
        B
      </StyledHomeLogo>
    </Link>
  );
};

export default HomeLogo;
