require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';
import Foo from './FooterComponent'

let yeomanImage = require('../images/icon.png');

class AppComponent extends React.Component {
    render() {
        return (
            <div className="index">
                <h1>React ToDo</h1>
                <img src={yeomanImage} alt="Yeoman Generator"/>
                {this.props.children}
                <Foo/>
            </div>
        );
    }
}

AppComponent.defaultProps = {};

export default AppComponent;
