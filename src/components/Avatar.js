import classNames from 'classnames';
import React from 'react';

import profileImg from '../images/profile.jpg';
import { speechBubble, showMessage, profileAvatar } from './Avatar.module.css';

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
          src={profileImg}
          className={profileAvatar}
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
