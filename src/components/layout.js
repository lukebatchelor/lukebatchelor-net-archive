import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import Header from './header';
import './layout.css';

const Layout = ({ children, curPage }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            maxWidth: 960,
            margin: '0 auto',
          }}
        >
          <Header siteTitle={data.site.siteMetadata.title} curPage={curPage} />
          <div
            style={{
              margin: '0 auto',
              maxWidth: 960,
              padding: '0px 1.0875rem 1.45rem',
              paddingTop: 0,
              flex: '1 0 auto',
            }}
          >
            {children}
          </div>
          <div
            style={{
              textAlign: 'center',
              padding: '5px',
              fontSize: '10px',
              flexShrink: '0',
              maxWidth: '70%',
              alignSelf: 'center',
            }}
          >
            Built with &hearts; using{' '}
            <a href="https://www.gatsbyjs.org/">Gatsby</a>,{' '}
            <a href="https://reactjs.org">React</a> and deployed on{' '}
            <a href="https://netlify.com">Netlify</a>. <br />
            View the source or report bugs on{' '}
            <a href="https://github.com/lukebatchelor/lukebatchelor-net">
              Github
            </a>
            .
          </div>
        </div>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
