import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import locationIconUrl from '../images/icon-location.svg';

const WorkHistory = ({ title, workplace, years, location, children }) => {
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ marginRight: '40px' }}>
        <p>
          <strong>{workplace}</strong>
        </p>
        <p>{years}</p>
      </div>
      <div style={{ flex: '1 0' }}>
        <p>
          <strong>{title}</strong>
        </p>
        <p>{children}</p>
        <p>
          <img
            src={locationIconUrl}
            alt="location"
            style={{ display: 'inline', verticalAlign: 'middle' }}
          />
          {location}
        </p>
      </div>
    </div>
  );
};

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
      friends in a park somewhere or checking out a local breweries.
    </p>
    <h3>Work</h3>
    <WorkHistory
      title="Senior JavaScript Developer"
      workplace="Atlassian"
      years="Apr 2018 – Present"
      location="Sydney, Australia"
    >
      My current role is as a Senior JavaScript developer in the Fabric Build
      team at Atlassian. <br />
      This mostly involves building on open source tools for managing and
      scaling mono-repos, including:
      <ul>
        <li>
          <a href="https://github.com/boltpkg/bolt">Bolt</a> - A Lerna/Yarn
          Workspaces alternative with a focus on dependency deduplication
        </li>
        <li>
          <a href="https://www.npmjs.com/package/@atlaskit/build-releases">
            Build Releases
          </a>{' '}
          - a tool for managing package bumping/releasing and semantic
          versioning within a mono-repo
        </li>
        <li>
          <a href="https://github.com/atlassian/landkid">Landkid</a> - A tool
          for managing the queueing of pull requests in large, continuously
          deployed mono-repos
        </li>
      </ul>
    </WorkHistory>
    <WorkHistory
      title="Frontend Developer"
      workplace="Atlassian"
      years="Feb 2016 – Apr 2018"
      location="Sydney, Australia"
    >
      Working on what was then the{' '}
      <a href="https://docs.atlassian.com/aui/">AUI</a> team and what later
      became Design Systems working on Atlassian's{' '}
      <a href="https://atlaskit.atlassian.com">Atlaskit</a> library.
      <br />
      Working with a wide range of technologies and tools and moving from
      webcomponents to React has given me a deep understanding of Design
      Systems, testing, open source, library authorship and continuous
      deployment. <br />
      My role slowly focused more on the build/automation side of things as our
      team/repo grew and we had more need for specialised scaling solutions.
    </WorkHistory>
    <WorkHistory
      title="IT Specialist - Internet Banking System"
      workplace="Bankwest"
      years="Feb 2015 – Nov 2015"
      location="Perth, Australia"
    >
      Building on a C# ASP .NET Internet Banking System.
      <br />
      Angular, Bootstrap and jQuery for front end development.
      <br />
      Jasmine for javascript testing.
      <br />
      Working in an agile development team
    </WorkHistory>
    <WorkHistory
      title="Associate IT Specialist - Data Services"
      workplace="Bankwest"
      years="Feb 2014 – Feb 2015"
      location="Perth, Australia"
    >
      Learned and applied skills in data warehousing.
      <ul>
        <li>ETL - Using SAS and Control-M</li>
        <li>
          EUL - OBIEE development and design
          <ul>
            <li>Building data analytics reports and dashboards</li>
            <li>Building data visualisations in D3.js</li>
          </ul>
        </li>
        <li>Some investigation/spiking with Hadoop, Hive/Impala, Pig/Oozie</li>
      </ul>
    </WorkHistory>
    <WorkHistory
      title="Sessional Academic"
      workplace="Curtin University"
      years="Feb 2012 – Nov 2013"
      location="Perth, Australia"
    >
      As a Sessional Academic I conducted tutorial sessions for first year
      Computer Science students at Curtin University. This also involved marking
      and test invigilation.
    </WorkHistory>
  </Layout>
);

export default IndexPage;
