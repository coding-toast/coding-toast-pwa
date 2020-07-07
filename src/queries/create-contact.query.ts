import gql from 'graphql-tag';

const CREATE_CONTACT = gql`
  mutation createContact($name: String, $email: String, $message: String) {
    createContact(input: { data: { name: $name, email: $email, message: $message } }) {
      contact {
        name
        createdAt
      }
    }
  }
`;

export default CREATE_CONTACT;
