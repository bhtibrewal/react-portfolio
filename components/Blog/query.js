import { gql } from "@apollo/client";

export const GetHashnodeBlogsFromUsername = gql`
  query GetHashnodeBlogsFromUsername($username: String!, $page: Int) {
    user(username: $username) {
      _id
      name
      numPosts
      publication {
        title
        posts(page: $page) {
          _id
          slug
          title
          brief
          coverImage
        }
      }
    }
  }
`;