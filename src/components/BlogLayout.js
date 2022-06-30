import React from 'react'
import styled from 'styled-components'
import SideBar from './sidebar'
import GlobalStyle from '../styles/global.jsx'
import { useSiteMetadata } from '../hooks/useSiteMetadata'
import { Header } from './Header'

import Footer from './Footer'

const AppStyles = styled.main`
  max-width: 1240px;
  margin: 0 auto;
  @media screen and (max-width: 800px) {
    width: 100%;
    padding: 0 2rem;
  }
`

const Container = styled.div`
  padding-top: 1rem;
  text-align: center;
  background-color: #662219; 
  max-width: 400px;
  margin: auto;
  padding: 0px 6px;
`

export const BlogLayout = ({ children }) => {
  const { title } = useSiteMetadata()
  return (
    <>
      <GlobalStyle />
      <SideBar pageWrapId={'page-wrap'} />
      <AppStyles>
        <Container>
          <Header siteTitle={title} />
        </Container>
        {children}
        <Footer />
      </AppStyles>
    </>
  )
}
