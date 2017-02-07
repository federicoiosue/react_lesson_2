'use strict';

import React from 'react';

require('styles/toDo/List.css');

class ListComponent extends React.Component {
  render() {
    return ( <
      div className = "list-component" >
      Please edit src / components / toDo / ListComponent.js to update this component!
      </div>
    );
  }
}

ListComponent.displayName = 'ToDoListComponent';

// Uncomment properties you need
// ListComponent.propTypes = {};
// ListComponent.defaultProps = {};

export default ListComponent;
