import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Profile from './social-profile/Profile';
import user from './social-profile/user.json';

// const user = React.createElement('p', null, 'Привет');

// console.log(element);

ReactDOM.render(
  <Profile
    name={user.name}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    stats={user.stats}
  />,
  document.querySelector('#root'),
);
