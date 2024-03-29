import React from 'react';

import './Filter.scss';

export default class Filter extends React.Component {
state = {
    active: [],
}

toggleFilter = (type) => (e) => {
  const { active } = this.state;
  const { onFilter } = this.props;
  const { target } = e;

  target.classList.toggle('filters__filter--active');

  if (active.includes(type)) {
    active.splice(active.indexOf(type), 1);
  } else {
    active.push(type);
  }

  onFilter(active);
}

render() {
    return (
      <ul className="filters">
        <li>
          <button className="filters__filter filters__filter--html" onClick={this.toggleFilter('html')}>HTML</button>
        </li>
        <li>
          <button className="filters__filter filters__filter--css" onClick={this.toggleFilter('css')}>CSS</button>
        </li>
        <li>
          <button className="filters__filter filters__filter--js" onClick={this.toggleFilter('javascript')}>JS</button> 
        </li>
      </ul>
    );
  }
}
