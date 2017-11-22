import React from 'react';
import { Marker, InfoWindow } from 'react-google-maps';
const iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
const icons = {
  library: {
    icon: `${iconBase}library_maps.png`,
  },
  info: {
    icon: `${iconBase}info-i_maps.png`,
  },
};

class MarkerTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.handleMarkerClick = this.handleMarkerClick.bind(this);
    this.handleCloseInfoWindow = this.handleCloseInfoWindow.bind(this);
  }
  handleMarkerClick() {
      this.setState({
        isOpen: !this.state.isOpen,
      });
  }
  handleCloseInfoWindow() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  handleTypeMarker(type) {
    if (type === 'default') {
      return null;
    } else if (type === 'library') {
      return icons.library.icon;
    }
    return icons.info.icon;
  }
  render() {
    return (
      <Marker position={this.props.position} icon={this.handleTypeMarker(this.props.type)} onMouseOut={this.handleMarkerClick} onMouseOver={this.handleMarkerClick}>
        {this.state.isOpen && <InfoWindow onCloseClick={this.handleCloseInfoWindow}>
          <span>Light Box</span>
        </InfoWindow>}
      </Marker>
    );
  }
}
export default MarkerTest;
