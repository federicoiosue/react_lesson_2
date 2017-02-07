'use strict';

import React from 'react';

require('styles//NoPage.css');

class NoPageComponent extends React.Component {
  render() {
    return (
      <div className="nopage-component">
        Please edit src/components///NoPageComponent.js to update this component!
      </div>
    );
  }
}

NoPageComponent.displayName = 'NoPageComponent';

// Uncomment properties you need
// NoPageComponent.propTypes = {};
// NoPageComponent.defaultProps = {};

export default NoPageComponent;
