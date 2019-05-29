import React, { Component } from 'react';
import ListItem from './ListItem';
import NavBar from './NavBar';
import Test from './Test';

class App extends Component {
  render() {
    return (
      <div >
        <Test />
        <ListItem />
      </div>
    )
  }
}

export default App;
