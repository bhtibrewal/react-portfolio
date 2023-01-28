import { ApolloClient, InMemoryCache, useQuery } from "@apollo/client";
import { BlogCard } from "./BlogCard";
import { GetHashnodeBlogsFromUsername } from "./query";
import { StyledBlogs } from "./StyledBlogs";
import { IPost } from "./type";

const client = new ApolloClient({
  uri: "https://api.hashnode.com/",
  cache: new InMemoryCache(),
});

const Blog = ({ username }: { username: string }) => {
  const { loading, data, error } = useQuery(GetHashnodeBlogsFromUsername, {
    client,
    variables: { username, page: 0 },
  });
  console.log(data);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const posts: IPost[] = data.user?.publication?.posts;
  return (
    <StyledBlogs>
      {posts?.map((post) => (
        <BlogCard key={post._id} post={post} />
      ))}
    </StyledBlogs>
  );
};

export default Blog;
