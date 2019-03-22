import React, { Component } from 'react'
import Helmet from 'react-helmet';

export default class NotFound extends Component {
  render() {
    return (
      <div>
        <Helmet title="404 - Síða fannst ekki" />
        <h1>404 - Síða fannst ekki</h1>
      </div>
    );
  }
}