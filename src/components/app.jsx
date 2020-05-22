import React, { Component } from 'react';

import FlatList from './flat_list';
import SimpleMap from './map';
import flats from '../../data/flats';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flats,
      selectedFlat: flats[0]
    };
  }

  selectFlat = (index) => {
    this.setState({ selectedFlat: flats[index] });
  }

  render() {
    return (
      <div>
        <FlatList
          flats={this.state.flats}
          selectedFlat={this.state.selectedFlat}
          selectFlat={this.selectFlat}
        />
        <SimpleMap selectedFlat={this.state.selectedFlat} />
      </div>
    );
  }
}

export default App;
