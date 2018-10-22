import { graphql } from 'gatsby';
import PostPreview from '../components/PostPreview';
import React from 'react';

import Layout from '../components/layout';

const Projects = ({ data }) => {
  return (
    <Layout curPage="projects">
      <h1>Projects</h1>
      <div
        style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}
      >
        {data.allMarkdownRemark.edges.map(({ node }) => {
          return <PostPreview {...node.frontmatter} {...node.fields} />;
        })}
      </div>
    </Layout>
  );
};

export const query = graphql`
  {
    allMarkdownRemark(
      filter: { fields: { postType: { eq: "projects" } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
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
                fluid(maxWidth: 900) {
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
