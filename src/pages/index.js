import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';

const IndexPage = () => (
  <Layout curPage="index">
    <h1>G'day!</h1>
    <p>...and welcome to my site!</p>
    <p>
      If you're here, I imagine you either want to{' '}
      <Link to="projects">look at cool things I've made</Link>,{' '}
      <Link to="blog">read cool things I've written</Link> or{' '}
      <Link to="contact">contact me</Link>. So feel free I guess!
    </p>
    <h3>About Me</h3>
    <p>
      I'm a software dev by trade, dabbling in anything I find interesting. I
      mainly work on front ends, build tools and CI builds, but love exploring
      everything else.
    </p>
    <p>
      I love open source and try to keep 100% of the code I write public and
      free where possible (even the bad stuff!).
    </p>
    <p>
      If I'm not coding I'm usually improv'ing or freestyle rapping with some
      friends in a park somewhere or checking out a local brewery.
    </p>
  </Layout>
);

export default IndexPage;
