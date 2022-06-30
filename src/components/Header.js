import { Link } from 'gatsby'
import React from 'react'
import { BigBlogTitle } from '../elements/Titles'

export const Header = ({ siteTitle, siteDescription }) => (
  <Link to="/">
    <BigBlogTitle>{siteTitle}</BigBlogTitle>
  </Link>
)

export default Header