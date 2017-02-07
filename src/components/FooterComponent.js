'use strict';

import React from 'react';

require('styles//Footer.css');

class FooterComponent extends React.Component {
  render() {
    return (
      <div className="footer-component">
        Made by Feio
      </div>
    );
  }
}

FooterComponent.displayName = 'FooterComponent';

// Uncomment properties you need
// FooterComponent.propTypes = {};
// FooterComponent.defaultProps = {};

export default FooterComponent;
