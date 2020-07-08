import gql from 'graphql-tag';

const GET_BLOG = gql`
  query getBlog($slug: String!) {
    blogs(where: { slug_contains: $slug }) {
      title
      author {
        displayName
        avatar {
          alternativeText
          formats
        }
      }
      banner {
        alternativeText
        formats
      }
      description
      isPublished
      publishDate
      content
    }
  }
`;

export default GET_BLOG;
