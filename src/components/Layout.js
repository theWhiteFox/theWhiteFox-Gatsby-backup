import React from 'react';
import GlobalStyle from '../styles/global.jsx'
import styled from 'styled-components';
import { useSiteMetadata } from '../hooks/useSiteMetadata';
import { Header } from './Header';
import SideBar from '../components/sidebar'
import Footer from "./Footer"
import { Subtitle } from '../elements/Titles'

const AppStyles = styled.main`
  max-width: 1240px;
  margin: 0 auto;
  @media screen and (max-width: 800px) {
    width: 100%;
    padding: 0 1.4rem;
    }
`;

const Container = styled.div`
  text-align: center;
  background-color: #662219;
  width:100%;
  padding: 0px 20px;
`

export const Layout = ({children}) => {
  const {title, description} = useSiteMetadata ();
  return (
    <>
    <SideBar pageWrapId={'page-wrap'} />  
    <AppStyles>
        <GlobalStyle />
        <Container>
          <Header siteTitle={title} />
          </Container>
      <Subtitle>{description}</Subtitle>
      {children}
      <Footer />
      </AppStyles>
    </>
  );
};
