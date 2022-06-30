import React from "react";

import { BlogSubtitle, BlogTitle, SideNav, Toolbar } from "../elements/Titles";
import Img from "gatsby-image";
import styled from "styled-components";
import { graphql, Link } from "gatsby";
import { BlogLayout } from "../components/BlogLayout";
import { Hero } from "../components/Hero";
import { useSiteMetadata } from "../hooks/useSiteMetadata";


// import Semantic UI CSS
import "semantic-ui-css/semantic.min.css";

const IndexWrapper = styled.main`
  display: grid;
  grid-column-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
`;

const PostWrapper = styled.div`
  background-color: #85cdca;
  margin-bottom: 1.4rem;
  position: relative;
  outline: 0px solid transparent;
  padding: 0px 0px;
  border: 2px solid #662219;
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  border-radius: 3px;
  &:hover {
    outline: 0px solid transparent;
    padding: 0px 0px;
    border: 2px solid #e34c39;
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
    h2 {
      color: #e34c39;
    }
  }
  p {
    color: black;
    font-size:1rem;
  }
  .front-page-excerpt {
    padding-bottom:4%;
  }
  .date {
    color: GhostWhite;
    position: absolute;
    bottom: 0;
    right: 0rem;
    background-color: #662219;
    padding: 0px 4px;
    font-size: 12px;
    margin-top:10%;
  }
`;

const Image = styled(Img)`
  border: 0px solid transparent;
  border-bottom-right-radius: 0px;
  border-bottom-left-radius: 0px;
`;

export default ({ data }) => {
  const { title, description } = useSiteMetadata();

  return (
    <BlogLayout>
      <Hero />
      <BlogSubtitle>
        <span>{title}</span>
        {description}
      </BlogSubtitle>
      <SideNav>
        <Toolbar to="https://github.com/theWhiteFox">
          <i aria-hidden="true" className="github alternate icon toolbar" />
        </Toolbar>
        <Toolbar to="/">
          <i className="home icon toolbar" />
          thewhitefox
        </Toolbar>
      </SideNav>
      <IndexWrapper>
        {data.allMdx.nodes.map(({ id, excerpt, frontmatter, fields }) => (
          <PostWrapper key={id}>
            <Link to={fields.slug}>
              <div class="img-hover-zoom">
                {!!frontmatter.cover ? (
                  <Image sizes={frontmatter.cover.childImageSharp.sizes} />
                ) : null}

                <div className="meta">
                  <BlogTitle>{frontmatter.title}</BlogTitle>
                  <p className="front-page-excerpt">{excerpt}</p>
                  <p className="date">{frontmatter.date}</p>
                </div>
              </div>
            </Link>
          </PostWrapper>
        ))}
      </IndexWrapper>
    </BlogLayout>
  );
};

export const query = graphql`
  query SITE_INDEX_QUERY {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      nodes {
        id
        excerpt(pruneLength: 70)
        frontmatter {
          title
          date(formatString: "Do MMM YYYY")
          cover {
            publicURL
            childImageSharp {
              sizes(maxWidth: 2000, traceSVG: { color: "#639" }) {
                ...GatsbyImageSharpSizes_tracedSVG
              }
            }
          }
        }
        fields {
          slug
        }
      }
    }
  }
`;
