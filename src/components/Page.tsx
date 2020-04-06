import * as React from 'react'
import Header from './Header'

const Page: React.FC = ({ children }) => (
  <>
    <Header />
    {children}
  </>
)

export default Page
