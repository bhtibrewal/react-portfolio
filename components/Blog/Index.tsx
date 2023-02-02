import { ApolloClient, InMemoryCache, useQuery } from "@apollo/client";
import { BlogCard } from "./BlogCard";
import { GetHashnodeBlogsFromUsername } from "./query";
import { StyledBlogs } from "./StyledBlogs";
import { IPost } from "./type";
import { StyledSection } from "../Style/StyledSection";
import Fade from "react-reveal/Fade";

const client = new ApolloClient({
  uri: "https://api.hashnode.com/",
  cache: new InMemoryCache(),
});

const Blogs = ({ username }: { username: string }) => {
  const { loading, data, error } = useQuery(GetHashnodeBlogsFromUsername, {
    client,
    variables: { username, page: 0 },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  const posts: IPost[] = data.user?.publication?.posts;

  return (
    <StyledSection id="blogs" aria-label="Blog's Section">
      <Fade top>
        <header className="section__header-main">
        <span className="section__header-main-count">03.</span>
          <h2 className="section__header-main-head"> Blogs</h2>
        </header>
      </Fade>

      <StyledBlogs>
        {posts?.map((post) => (
          <BlogCard key={post._id} post={post} />
        ))}
      </StyledBlogs>
    </StyledSection>
  );
};

export default Blogs;
