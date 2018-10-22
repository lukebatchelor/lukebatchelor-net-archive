import { Link } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';

export default ({ title, dateRelative, dateFmt, thumbnail, slug }) => {
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
