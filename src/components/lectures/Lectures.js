import React from 'react';

import './Lectures.scss';

export default class Lectures extends React.Component {
  
    render() {
      const { lectures } = this.props;
  
      return (
        <div className="list">
        <div className="list__row">
            {lectures.map(lecture => {
                return (
                  <div className="list__col">
                    <a className="listItem" href={lecture.slug}>
                      <div className="listItem__image">
                        <img src={lecture.thumbnail} alt=""></img>
                      </div>
                      <div className="listItem__bottom">
                        <div className="listItem__texts">
                            <span>{lecture.category}</span>
                            <h2 className="listItem__title">{lecture.title}</h2>
                        </div>
                        <div className="listItem__finished">{lecture.finished ? "✓" : ""}</div>
                      </div>
                    </a>
                  </div>
                );
            })}
        </div>
      </div>
      );
    }
  }