import React, { Component } from 'react';

import { getLectureList } from '../../api';

import Header from '../../components/header/Header';
import Lectures from '../../components/lectures/Lectures'

export default class Home extends Component {

  state = {
    lectures: getLectureList(),
  }

  onFilter = (active) => {
    this.setState({ lectures: getLectureList(active) });
  }


  render() {
    const { lectures } = this.state;

    return (
      <React.Fragment>
        <Header category="Vefforritun" title="Fyrirlestrar" />
        <Lectures lectures={lectures} onFilter={this.onFilter}/>
      </React.Fragment>
    );
  }
}
