import React, { Component } from 'react';

import Flat from './flat';
import FlatList from './flat_list';
import SimpleMap from './map';
import flatsData from '../../data/flats';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flats: flatsData,
      selectedFlat: 'dfdfdf'
    };
  }

  render() {
    return (
      <div>
        <FlatList flats={this.state.flats}/>
        <SimpleMap />
      </div>
    );
  }
}

export default App;
