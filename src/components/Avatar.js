import classNames from 'classnames';
import React from 'react';

import profileImg from '../images/profile.jpg';
import { speechBubble, showMessage } from './Avatar.module.css';

const avatarStyles = {
  display: 'inline-block',
  width: '100px',
  height: '100px',
  borderRadius: '50px',
  marginBottom: '0px',
  marginRight: '15px',
};

const messages = [
  'ffff ffff fffff',
  'pfft, easter eggs are so 1999',
  'there is no cow level',
  'CSS in JS is bad mmkay',
  'do you think there will be something funny here?',
];

class Avatar extends React.Component {
  state = {
    messageShown: false,
    messages: messages,
  };
  avatarClicked = () => {
    const newMessages = this.state.messages.slice(1);
    this.setState({ messageShown: true, messages: newMessages });
  };
  animationEnd = () => {
    this.setState({ messageShown: false });
  };
  render() {
    const messageClasses = classNames(speechBubble, {
      [showMessage]: this.state.messageShown,
    });
    return (
      <>
        <img
          style={avatarStyles}
          src={profileImg}
          alt="Avatar"
          onClick={this.avatarClicked}
        />
        <div className={messageClasses} onAnimationEnd={this.animationEnd}>
          {this.state.messages[0]}
        </div>
      </>
    );
  }
}

export default Avatar;
