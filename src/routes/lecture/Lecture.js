import React, { Component } from 'react';
import { getLecture } from '../../api';
import { Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Header from '../../components/header/Header';
import LectureContent from '../../components/lecture/Lecture'
import NotFound from '../../routes/notFound/NotFound';

export default class Lecture extends Component {

  state = {
    lecture: getLecture(this.props.match.params.slug),
  }
  render() {
    const { lecture } = this.state;

    if(!lecture){
      return <Route component={NotFound}/>
    }

    return (
      <React.Fragment>
        <Helmet  title={lecture.title}/>
        <Header title={lecture.title} category={lecture.category} img={lecture.image} />
        <LectureContent lecture={lecture}/>
      </React.Fragment>
    )
  }
}
