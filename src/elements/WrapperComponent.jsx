import styled from 'styled-components'

// Create a Wrapper component that'll render a <section> tag with some styles
export const Container = styled.section`
  position: relative;
  height: 100vh;
`
export const Wrapper = styled.section`
  position: absolute;
  width: 59%;
  height: 100%;
  background-color: rgba(226, 76, 56, 0.1);
  z-index: -5;
  bottom: 0;
  right: 0;
`