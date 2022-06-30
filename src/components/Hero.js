import { Link } from 'gatsby'
import React from 'react'
import FoxSVG from '../components/img/whiteFoxes.svg'

export const Hero = () => (
  <Link to="/">
    <span className="logo">
      <img src={ FoxSVG } alt="theWhiteFox Logo" />
    </span>
  </Link>
);

export default Hero
