require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

let yeomanImage = require('https://lh3.googleusercontent.com/-K-AR6CydUX_dtZ-Atx-NvOxrCi9fRHPIQUCTzsXftR_pI6bjKOdXqPh2BkTNgXaAVE=w300');

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <img src={yeomanImage} alt="Yeoman Generator" />
        <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
        {this.props.children}
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
