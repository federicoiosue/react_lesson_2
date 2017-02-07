'use strict';

import React from 'react';

require('styles//Welcome.css');

class WelcomeComponent extends React.Component {
  render() {
    return (
      <div className="welcome-component">
        <h1>Welcome to my React.js test app</h1>
      </div>
    );
  }
}

WelcomeComponent.displayName = 'WelcomeComponent';

// Uncomment properties you need
// WelcomeComponent.propTypes = {};
// WelcomeComponent.defaultProps = {};

export default WelcomeComponent;
