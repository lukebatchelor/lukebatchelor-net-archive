import React from 'react';

import Layout from '../components/layout';
// https://iconmonstr.com
import TwitterIcon from '../images/icon-twitter.svg';
import GithubIcon from '../images/icon-github.svg';
import LinkedinIcon from '../images/icon-linkedin.svg';
import EmailIcon from '../images/icon-email.svg';

const SocialCard = ({ name, icon, url }) => {
  return (
    <div
      style={{
        border: '1px solid grey',
        marginBottom: '10px',
        padding: '10px',
        fontSize: '20px',
        borderRadius: '4px',
      }}
    >
      <a href={url}>
        <img
          src={icon}
          alt={name}
          style={{
            display: 'inline',
            margin: '0px 20px',
            verticalAlign: 'middle',
          }}
        />
        {name}
      </a>
    </div>
  );
};

const Contact = () => (
  <Layout curPage="contact">
    <h1>Contact</h1>
    <p>If you know me, you can probably already get a hold of me.</p>
    <p>If not, you can probably figure out how.</p>
    <SocialCard
      name="Twitter"
      url="https://twitter.com/alukebatchelor"
      icon={TwitterIcon}
    />
    <SocialCard
      name="Github"
      url="https://github.com/lukebatchelor/"
      icon={GithubIcon}
    />
    <SocialCard
      name="Linkedin"
      url="https://www.linkedin.com/in/luke-batchelor-8068b884/"
      icon={LinkedinIcon}
    />
    <SocialCard
      name="[lastname].[firstname]@gmail.com"
      url="mailto:?subject=Contact"
      icon={EmailIcon}
    />
  </Layout>
);

export default Contact;
