import * as React from 'react'
import IndexLayout from '../layouts'
import Page from '../components/Page'
import ContactForm from '../components/contact-form/ContactForm'

const ContactPage = () => (
  <IndexLayout>
    <Page>
      <ContactForm />
    </Page>
  </IndexLayout>
)

export default ContactPage
