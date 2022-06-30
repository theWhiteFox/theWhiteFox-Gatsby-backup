import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

export const Toolbar = styled((props) => <Link {...props} />)`
  font-family: 'MyFont', Fallback, sans-serif;
  font-size: large;
  padding: 12px 4px 4px 4px;
  left: 0px;
  top: 15%;
  z-index: 15;
  transition: color 0.2s ease;
  font-weight: bold;
  letter-spacing: 4px;
  color: #662219;
  &:hover {
    color: white;
    background-color: #662219;
    padding: 12px 4px 4px 4px;
  }
  .white {
    color:white;
    font-family: 'MyFont', Fallback, sans-serif;
    background: #662219;
    padding-right: 1%;
  }
  @media only screen and (max-width: 800px) {
    top: 0%;
    text-align: center;
    display: inline-block;
    padding: 1px 0px 4px 4px;
    transform-origin: 0 0;
    font-weight: bold;
    letter-spacing: 4px;
    &:hover {
      color: white;
      background-color: #662219;
      padding: 1px 0px 4px 4px;
      font-weight: bold;
      letter-spacing: 4px;
    }
  }
`;

export const Title = styled.h1`
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  font-family: 'MyFont', Fallback, sans-serif;
  color: #662219;
  font-weight: bold;
  &:before {
    content: '';
    width: 40px;
    height: 40px;
    position: absolute;
    background-size: 40px;
    left: -60px;
    top: 5px;
  }
`
export const BigTitle = styled.h1`
  text-shadow: 0 5px 35px rgba(255, 255, 255, 0.15);
  color: #662219;
  font-family: 'MyFont', Fallback, sans-serif;
  font-size: 2.6rem;
  text-align: left;
  padding-left:10%;
  padding-right:12%;
  letter-spacing: .4rem;
  .white {
    color:white;
    font-family: 'MyFont', Fallback, sans-serif;
    background: #662219;
    padding-right: 1%;
  }
  @media only screen and (max-width: 800px) {
    padding-left:0%;
    padding-right:0%;
  }
`
export const Subtitle = styled.div`
  text-shadow: 0 2px 15px rgba(0, 0, 0, 0.2);
  font-family: 'MyFont', Fallback, sans-serif;
  text-align: center;
  color: #662219;
  /* Demo Purpose Only*/
  .demo {
    font-family: 'Raleway', sans-serif;
    color:#fff;
    display: block;
    margin: 0 auto;
    padding: 15px 0;
    text-align: center;
  }
  .demo a{
    font-family: 'Raleway', sans-serif;
    color: #2ecc71;
    }
`

export const BigBlogTitle = styled.p`
  text-shadow: 0 5px 35px rgba(255, 255, 255, 0.15);
  color: white;
  font-family: 'MyFont', Fallback, sans-serif;
  text-align: center;
  font-weight: 600;
  padding: .1rem 0;
  font-size:32px;
  margin-top: 4rem;
  @media screen and (min-width: 768px) {
    display:none;
  }
`

export const BlogTitle = styled.h2`
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  font-family: 'MyFont', Fallback, sans-serif;
  color: #662219;
  font-weight: 600;
  &:before {
    content: '';
    width: 40px;
    height: 40px;
    position: absolute;
    background-size: 40px;
    left: -60px;
    top: 5px;
  }
`
export const BlogSubtitle = styled.h1`
  text-shadow: 0 2px 15px rgba(0, 0, 0, 0.2);
  font-family: 'MyFont2', Fallback, sans-serif;
  font-size: 1.6rem;
  text-align: center;
  color: #662219;
  line-height:3rem;
  >span {
    letter-spacing: .4rem;
    color:white;
    background-color: #662219;
    font-family: 'MyFont', Fallback, sans-serif;
    @media only screen and (max-width: 800px) {
      color:white;
      display: none;
    }
  }
`

export const SideNav = styled(props => <Link {...props} />)`
  font-family: 'MyFont', Fallback, sans-serif;
  padding: 10px 0px 10px 15px;
  left: 2px;
  top: 48%;
  z-index: 15;
  transition: color 0.2s ease;
  position: fixed;
  -webkit-transform-origin: left top;
  -webkit-transform:rotate(-90deg) translateX(-100%);
    @media only screen and (max-width: 800px) {
    top: 40%;
    padding: 0px 0px 2px 2px;
    left: .3rem;
    transform-origin: 0 0;
    }
`

export const CardLink = styled(props => <Link {...props} />)`
 position: absolute;
  width:100%;
  height:100%;
  top:0px;
  left:0px;
  `

export const StyledLink = styled(props => <Link {...props} />)`
  position: relative;
  font-size: 1.2rem;
  padding: 3px 5px 0px 5px;
  margin: 10rem 0 10.63rem;
  transition: color 0.2s ease;
  font-weight: bold;
   padding: 13px 15px 10px 15px;
  color: #662219;
       &:hover {
      color: white;
      background-color: #662219;
    }
`

export const DoubleDown = styled(props => <Link {...props} />)`
    padding: 8px 1px 2px 4px;
    color: #662219;
    &:hover {
      color: white;
      background-color: #662219;
    }
`
export const ScrollDown = styled.div`

  margin-top: 5rem;
  text-shadow: 0 2px 15px rgba(0, 0, 0, 0.2);
  font-family: 'MyFont', Fallback, sans-serif;
  text-align: center;
  -moz-animation: bounce 5s infinite;
  -webkit-animation: bounce 5s infinite;
  animation: bounce 5s infinite;
  animation-timing-function: ease;
  `
