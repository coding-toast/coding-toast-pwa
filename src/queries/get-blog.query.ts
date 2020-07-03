import gql from 'graphql-tag';

const GET_BLOG = gql`
  query getBlog($slug: String!) {
    blogs(where: { slug_contains: $slug }) {
      createdAt
      title
      description
      banner
      author
      content
    }
  }
`;

export default GET_BLOG;
