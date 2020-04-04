import * as React from 'react'
import styled from '@emotion/styled'

import { dimensions } from '../styles/variables'
import Header from './Header'

const StyledPage = styled.div`
  h1 {
    color: white;
  }
  background-color: #121212;
  color: white;
  display: block;
  flex: 1;
  position: relative;
  padding: ${dimensions.containerPadding}rem;
`

interface PageProps {
  className?: string
}

const Page: React.FC<PageProps> = ({ children, className }) => (
  <StyledPage className={className}>
    <Header />
    {children}
  </StyledPage>
)

export default Page
