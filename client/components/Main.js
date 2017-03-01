import React, { Component } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

export default class Main extends Component {

  render () {
    const { children } = this.props;

    return (
      <div>
        <Sidebar />
        <Navbar />
        <main>
          { children }
        </main>
      </div>
    );
  }
}
