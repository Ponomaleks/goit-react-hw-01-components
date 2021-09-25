import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Profile from './Components/social-profile/Profile';
import user from './Components/social-profile/user.json';

import Statistics from './Components/statistics/Statistics';
import statisticalData from './Components/statistics/statistical-data.json';

ReactDOM.render(
  <>
    <Profile
      name={user.name}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <Statistics stats={statisticalData} />
  </>,
  document.querySelector('#root'),
);
