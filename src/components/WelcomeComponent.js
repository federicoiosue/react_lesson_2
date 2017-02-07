'use strict';

import React from 'react';
import { Link } from 'react-router';

require('styles//Welcome.css');

class WelcomeComponent extends React.Component {
    render() {
        return (
            <div className="welcome-component">
                <h2>Welcome to my React.js test app</h2>
                <p>Click <Link to="/list">HERE</Link> to start writing TODOs</p>
            </div>
        );
    }
}

WelcomeComponent.displayName = 'WelcomeComponent';

// Uncomment properties you need
// WelcomeComponent.propTypes = {};
// WelcomeComponent.defaultProps = {};

export default WelcomeComponent;
