import styled from "styled-components";

export const StyledBlogs = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
  gap: 2rem;
  padding: 2.5rem;
  align-items: stretch;

  .hashnode-blog-post-card {
    transition: 0.6s;
    padding: 1.5rem;
    margin-bottom: 0;
    border-radius: 10px;
    width: 100%;
    background-color: #6464644a;
  }

  .hashnode-blog-post-card-cover-image {
    width: 100%;
    margin-bottom: 1.5rem;
  }

  .hashnode-blog-post-card-title {
  }

  .hashnode-blog-post-card-desc {
  }
`;
