import React from "react";
import { MainLayout } from "../components/MainLayout";
import { Title, SideNav, Toolbar } from "../elements/Titles";
import styled from "styled-components";
import { graphql, Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

const BlogPost = styled.div`
  max-width: 920px;
  margin: auto;
  padding: 0 2rem;

  .date {
    font-size: 16px;
  }
`;

export default ({ data, pageContext }) => {
  const { frontmatter, body } = data.mdx;
  const { previous, next } = pageContext;
  return (
    <>
      <MainLayout />
      <SideNav>
        <Toolbar to="https://github.com/theWhiteFox">
          <i aria-hidden="true" className="github alternate icon toolbar" />
        </Toolbar>
        <Toolbar to="/">
          <i className="home icon toolbar" />
          thewhitefox
        </Toolbar>
      </SideNav>
      <BlogPost>
        <Title>{frontmatter.title}</Title>
        <p className="date">
          {frontmatter.date} Written by{" "}
          <a id="about" className="menu-item" href="/about">
            theWhiteFox
          </a>
        </p>
        <MDXRenderer>{body}</MDXRenderer>
        {previous === false ? null : (
          <>
            {previous && (
              <Link to={previous.fields.slug}>
                <span className="previous">{previous.frontmatter.title}</span>
              </Link>
            )}
          </>
        )}
        {next === false ? null : (
          <>
            {next && (
              <Link to={next.fields.slug}>
                <span className="next">{next.frontmatter.title}</span>
              </Link>
            )}
          </>
        )}
      </BlogPost>
    </>
  );
};

export const query = graphql`
  query PostBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        date(formatString: "YYYY MMMM Do")
      }
    }
  }
`;
