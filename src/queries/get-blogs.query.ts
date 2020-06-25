import gql from 'graphql-tag';

const GET_BLOGS = gql`
  query getBlogs($limit: Int) {
    blogs(limit: $limit) {
      id
      title
      author
      banner
      description
      createdAt
    }
  }
`;

export default GET_BLOGS;
