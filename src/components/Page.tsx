import * as React from 'react'
import NavigationPanel from './navigation-panel/NavigationPanel'
import Footer from './footer/Footer'

const Page: React.FC = ({ children }) => (
  <>
    <NavigationPanel />
    {children}
    <Footer />
  </>
)

export default Page
