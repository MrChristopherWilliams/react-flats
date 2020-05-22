import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './marker';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      center: {
        lat: this.props.selectedFlat.lat,
        lng: this.props.selectedFlat.lng
      }
    };
  }

  render() {
    return (
      // Important! Always set the container height explicitly
      <div className="map-container" >
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBypnuGqAIu8ZnFnW7-g3D7WdE_M1lMZn8' }}
          defaultCenter={this.state.center}
          defaultZoom={12}
        >
        <Marker lat={this.props.selectedFlat.lat} lng={this.props.selectedFlat.lng} />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
