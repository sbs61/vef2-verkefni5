import React, { Component } from 'react';
import { getLecture, toggleLectureFinish, loadSavedLectures } from '../../api';
import { Route } from 'react-router-dom';

import Header from '../../components/header/Header';
import LectureItem from '../../components/lecture/Lecture'

export default class Lecture extends Component {

  state = {
    lecture: getLecture(this.props.match.params.slug),
  }
  render() {
    const { lecture } = this.state;

    return (
      <React.Fragment>
        <Header title={lecture.title} category={lecture.category} img={lecture.image} />
        <LectureItem lecture={lecture}/>
      </React.Fragment>
    )
  }
}
