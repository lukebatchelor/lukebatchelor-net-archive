import React from 'react';
import profileImg from '../images/profile.jpg';

const avatarStyles = {
  display: 'inline-block',
  width: '100px',
  height: '100px',
  borderRadius: '50px',
  marginBottom: '0px',
  marginRight: '15px',
};

const Avatar = () => <img style={avatarStyles} src={profileImg} alt="Avatar" />;

export default Avatar;
