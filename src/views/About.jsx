import React from 'react'
import PropTypes from 'prop-types'
import Inner from '../elements/Inner'

const About = ({ children, offset }) => (
  <>
    <Content speed={0.4} offset={offset}>
      <Inner>{children}</Inner>
    </Content>
  </>
)

export default About

About.propTypes = {
  children: PropTypes.node.isRequired,
  offset: PropTypes.number.isRequired,
}