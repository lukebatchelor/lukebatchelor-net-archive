import React from 'react';
import { Link } from 'gatsby';
import Avatar from './Avatar';

const navLinkStyle = (linkTo, curPage) => ({
  textDecoration: curPage === linkTo ? 'undeline' : 'none',
  textDecorationStyle: 'double',
  color: 'blanchedalmond',
  fontSize: 'initial',
  marginRight: '15px',
});

const Header = ({ siteTitle, curPage }) => (
  <div
    style={{
      background: 'black',
      marginBottom: '1.45rem',
      flexShrink: '0',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
      }}
    >
      <Avatar />
      <div
        style={{ marginLeft: '5px', display: 'flex', flexDirection: 'column' }}
      >
        <h1 style={{ margin: 0, color: 'green', fontSize: '2rem' }}>
          {siteTitle}
        </h1>
        <h3 style={{ margin: '10px 0px 0px 0px', fontSize: 'initial' }}>
          <Link style={{ ...navLinkStyle('index', curPage) }} to="/">
            About
          </Link>
          <Link style={{ ...navLinkStyle('projects', curPage) }} to="projects">
            Projects
          </Link>
          <Link
            style={{
              ...navLinkStyle('blog', curPage),
            }}
            to="blog"
          >
            Blog
          </Link>
          <Link style={{ ...navLinkStyle('contact', curPage) }} to="contact">
            Contact
          </Link>
        </h3>
      </div>
    </div>
  </div>
);

export default Header;
