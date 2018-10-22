import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';

import Layout from '../components/layout';

const Project = ({ title, dateRelative, dateFmt, thumbnail, slug }) => {
  return (
    <div
      style={{
        border: '1px solid white',
        margin: '10px',
        marginBottom: '20px',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <div
        style={{
          height: '250px',
          width: '250px',
          border: '1px solid lightgrey',
        }}
      >
        <Link to={slug}>
          <Img fluid={thumbnail.childImageSharp.fluid} />
        </Link>
      </div>
      <div>
        <Link to={slug}>{title}</Link> -{' '}
        <span style={{ color: 'grey' }} title={dateFmt}>
          {dateRelative}
        </span>
      </div>
    </div>
  );
};

const Projects = ({ data }) => {
  console.log(data);
  return (
    <Layout curPage="projects">
      <h1>Projects</h1>
      <div
        style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}
      >
        {data.allMarkdownRemark.edges.map(({ node }) => {
          return <Project {...node.frontmatter} {...node.fields} />;
        })}
      </div>
    </Layout>
  );
};

export const query = graphql`
  {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          frontmatter {
            title
            dateRelative: date(fromNow: true)
            dateFmt: date(formatString: "DD MMM YYYY")
            date
            description
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 650) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          html
          fields {
            slug
          }
        }
      }
    }
  }
`;

export default Projects;
