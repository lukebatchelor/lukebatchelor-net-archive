import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import Layout from '../components/layout';

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout curPage="projects">
      <div>
        <h1>{post.frontmatter.title}</h1>
        <p style={{ color: 'grey' }}>&#124; {post.frontmatter.description}</p>

        <div style={{ maxWidth: '70%', margin: '30px auto' }}>
          <Img fluid={post.frontmatter.thumbnail.childImageSharp.fluid} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        description
        thumbnail {
          childImageSharp {
            fluid(maxWidth: 650) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
