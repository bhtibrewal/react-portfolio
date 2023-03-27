import type { NextPage } from "next";
import {
  AboutMe,
  Experience,
  Header,
  Projects,
  Resume,
  Technologies,
} from "../components";
import { Meta } from "../modules/Home";
import { MainPage } from "../components/Style/StyledHeader";
import Blog from "../components/Blog/Index";

const Home: NextPage = () => {
  return (
    <>
      <Meta />

      <Header />
      <MainPage>
        <div className="container">
          <Experience />
          <AboutMe />
          <Technologies />
          <Projects />
          <Blog username={"bhavika-tibrewal"} />
        </div>
        <Resume />
      </MainPage>
    </>
  );
};

export default Home;
