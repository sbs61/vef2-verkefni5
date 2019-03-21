import React from 'react';

import './Lectures.scss';

export default class Lectures extends React.Component {

  state = {
    active: [],
}

onClickHandler = (type) => (e) => {
  const { active } = this.state;
  const { onFilter } = this.props;
  const { target } = e;

  target.classList.toggle('filters__filter--active');

  if (active.includes(type)) {
    active.splice(active.indexOf(type), 1);
  } else {
    active.push(type);
  }
  console.log(active);

  onFilter(active);
}
  
    render() {
      const { lectures } = this.props;
  
      return (
        <div>
        <ul className="filters">
        <li>
          <button className="filters__filter filters__filter--html" onClick={this.onClickHandler('html')}>HTML</button>
        </li>
        <li>
          <button className="filters__filter filters__filter--css" onClick={this.onClickHandler('css')}>CSS</button>
        </li>
        <li>
          <button className="filters__filter filters__filter--js" onClick={this.onClickHandler('javascript')}>JS</button> 
        </li>
        </ul>
        <div className="list">
        <div className="list__row">
            {lectures.map(lecture => {
                return (
                  <div className="list__col">
                    <a className="listItem" href={lecture.slug}>
                      <div className="listItem__image">
                        <img src={lecture.thumbnail} alt=""></img>
                      </div>
                      <div className="listItem_bottom">
                        <div className="listItem__texts">
                            <span>{lecture.category}</span>
                            <h2 className="listItem__title">{lecture.title}</h2>
                        </div>
                      </div>
                    </a>
                  </div>
                );
            })}
        </div>
      </div>
      </div>
      );
    }
  }