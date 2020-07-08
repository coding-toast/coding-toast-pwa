import gql from 'graphql-tag';

const GET_BLOGS = gql`
  query getBlogs($limit: Int) {
    blogs(limit: $limit, sort: "createdAt:desc") {
      slug
      title
      author {
        displayName
      }
      banner {
        alternativeText
        url
      }
      description
      isPublished
      publishDate
    }
  }
`;

export default GET_BLOGS;
