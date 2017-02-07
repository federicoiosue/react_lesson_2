require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';
import Foo from './FooterComponent'

let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <img src={yeomanImage} alt="Yeoman Generator" />
        <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
        {this.props.children}
        <Foo/>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
