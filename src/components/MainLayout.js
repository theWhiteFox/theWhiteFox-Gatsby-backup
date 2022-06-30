import React from 'react';
import styled from 'styled-components';
import SideBar from './sidebar'
import GlobalStyle from '../styles/global.jsx'
import { BigTitle, SideNav } from '../elements/Titles'
import "../styles/tailwind.min.css";

const AppStyles = styled.main`
  max-width: 1240px;
  margin: 0 auto;
  @media screen and (max-width: 800px) {
    width: 100%;
    padding: 0 1.4rem;
    }
`

const Container = styled.div`
  margin:2rem 0;
  text-align: center;
  width:100%;
  padding: 0px 20px;
`

export const MainLayout = () => {
  return (
    <>
      <SideNav />
      <SideBar pageWrapId={'page-wrap'} />
      <AppStyles>
        <GlobalStyle />
        <Container>
          <BigTitle>
           the<a href="/"><span className="white">WhiteFox</span></a> DESIGNING & BUILDING WEBSITE / MOBILE APPS
          </BigTitle>
        </Container>
      </AppStyles>
    </>
  );
};
