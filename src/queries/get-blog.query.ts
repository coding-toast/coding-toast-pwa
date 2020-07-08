import gql from 'graphql-tag';

const GET_BLOG = gql`
  query getBlog($slug: String!) {
    blogs(where: { slug_contains: $slug }) {
      title
      author {
        displayName
        avatar {
          alternativeText
          url
        }
      }
      banner {
        alternativeText
        url
      }
      description
      isPublished
      publishDate
      content
    }
  }
`;

export default GET_BLOG;
