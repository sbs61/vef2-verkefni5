import React from 'react';
import { getLecture, toggleLectureFinish, loadSavedLectures } from '../../api';

import './Lecture.scss';

import Item from '../../components/item/Item';

export default class Lecture extends React.Component {

  finishLecture = (slug) => (e) => {
    const { target } = e;
    const isFinished = target.classList.contains('lecture__finish--finished');
    if (isFinished) {
      target.textContent = 'Klára fyrirlestur';
    } else {
      target.textContent = '✓ Fyrirlestur kláraður';
    }

    target.classList.toggle('lecture__finish--finished');
    toggleLectureFinish(slug, !isFinished);
    this.setState({ lecture : getLecture(this.props.match.params.slug)});
  }

  checkFinished = (slug) => {
    const saved = loadSavedLectures();
    return saved.indexOf(slug) >= 0;
  }
  
  render() {
    const { lecture } = this.props;
    return (
      <section className="lecture">
      <div className="lecture__content">
        <div className="lecture__row">
          <div className="lecture__col">
            {lecture.content.map((item, k) => {
                return (
                  <Item key={k} item={item}/> 
                );
              })}
          </div>
        </div>
      </div>
      <footer className="lecture__footer">
      {lecture.finished ? 
            <button onClick={this.finishLecture(lecture.slug)} className="lecture__finish lecture__finish--finished">✓ Klára fyrirlestur</button>
            :
            <button onClick={this.finishLecture(lecture.slug)} className="lecture__finish">Klára fyrirlestur</button>
          }
        <a className="lecture__back" href="/">Til baka</a>
      </footer>
      </section>
    );
  }
}