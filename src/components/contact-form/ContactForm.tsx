import * as React from 'react';
import * as Yup from 'yup';
import { Form, Card, Button } from 'react-bootstrap';
import { Formik } from 'formik';
import CREATE_CONTACT from 'queries/create-contact.query';
import { logEvent, logException } from 'utils/analytics';
import { useMutation } from '@apollo/react-hooks';

const ContactForm = () => {
  const NAME_MAX_LENGTH = 30;
  const MESSAGE_MAX_LENGTH = 10000;

  const [sendContact, { loading: mutationLoading, error: mutationError }] = useMutation(CREATE_CONTACT, {
    onCompleted: () => {
      logEvent('Contact', 'Message sent');
      alert('Message sent!');
    },
    onError: (error) => {
      logException(error.message);
      alert(error);
    }
  });

  const onSubmit = (
    values: {
      email: string;
      message: string;
      name: string;
    },
    { setSubmitting }
  ) => {
    const { email, message, name } = values;
    sendContact({ variables: { name, email, message } });
    setSubmitting(false);
  };

  const schema = Yup.object({
    name: Yup.string().max(NAME_MAX_LENGTH, 'Please Limit to 30 letters').required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
    message: Yup.string().max(MESSAGE_MAX_LENGTH, 'Please shorten your message to 10,000 characters').required('Required')
  });
  return (
    <Card body style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}>
      <Formik initialValues={{ name: '', email: '', message: '' }} validationSchema={schema} onSubmit={onSubmit}>
        {({ handleSubmit, handleChange, handleBlur, values, touched, errors }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <Form.Group controlId='name'>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter Name'
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={touched.name && !!errors.name}
                isValid={touched.name && !errors.name}
              />
              <Form.Control.Feedback type='invalid'>{errors.name}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId='email'>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type='email'
                placeholder='Enter email'
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={touched.email && !!errors.email}
                isValid={touched.email && !errors.email}
              />
              <Form.Control.Feedback type='invalid'>{errors.email}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId='message'>
              <Form.Label>Message</Form.Label>
              <Form.Control
                as='textarea'
                placeholder='Your message...'
                rows={3}
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={touched.message && !!errors.message}
                isValid={touched.message && !errors.message}
              />
              <Form.Control.Feedback type='invalid'>{errors.message}</Form.Control.Feedback>
            </Form.Group>
            <Button type='submit' className='btn-accent-secondary' block>
              Send
            </Button>
            {mutationLoading && <p>Loading...</p>}
            {mutationError && <p>Error :( Please try again</p>}
          </Form>
        )}
      </Formik>
    </Card>
  );
};

export default ContactForm;
