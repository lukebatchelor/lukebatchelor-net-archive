import React from 'react';
import { Link } from 'gatsby';
import Avatar from './Avatar';

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: 'black',
      marginBottom: '1.45rem',
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
      }}
    >
      <Avatar />
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'green',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </div>
);

export default Header;
