import React from 'react';
import { compose, withProps, withStateHandlers } from 'recompose';
import { withScriptjs, withGoogleMap, GoogleMap  } from 'react-google-maps';
import MarkerTest from '../Marker/Marker.js';

const MyMapComponent = compose(
  withProps({
    googleMapURL: 'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places',
    loadingElement: <div style={{ height: '100%' }} />,
    containerElement: <div style={{ width: '600px', height: '600px' }} />,
    mapElement: <div style={{ height: '100%' }} />,
  }),
  withStateHandlers(() => ({
    isOpen: false,
    markersData: [
      {
        position: {
          lat: -34.03900467904444, lng: 149.4305419921875,
        },
        type: 'default',
      }, {
        position: {
          lat: -33.87953701355922, lng: 149.23828125,
        },
        type: 'library',
      }, {
        position: {
          lat: -33.24328185847948, lng: 150.1171875,
        },
        type: 'info',
      },
    ],
  }), {
    onToggleOpen: ({ isOpen }) => () => ({
      isOpen: !isOpen,
    }),
  }),
  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -34.03900467904444, lng: 149.4305419921875 }}
    onClick={props.onMapClick}
  >
    {props.markersData.map((marker, i) => (
      <MarkerTest key={i} position={marker.position} type={marker.type} />
    )
   )
   }

  </GoogleMap>
);

class InteractiveMap extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isMarkerShown: false,
    };
    this.handleMarkerClick = this.handleMarkerClick.bind(this);
    this.delayedShowMarker = this.delayedShowMarker.bind(this);
    this.handleMapClick = this.handleMapClick.bind(this);
  }
  handleMapClick(e) {
    console.log('data', e.latLng.lat(), e.latLng.lng());
    console.log('call meteor method and pop up modal', e);
  }
  componentDidMount() {
    this.delayedShowMarker();
  }

  delayedShowMarker() {
      this.setState({ isMarkerShown: true });
  }

  handleMarkerClick(e) {
    console.log('data', e.latLng.lat(), e.latLng.lng());
    this.setState({ isMarkerShown: false });
    this.delayedShowMarker();
  }

  render() {
    return (
      <MyMapComponent
        isMarkerShown={this.state.isMarkerShown}
        onMarkerClick={this.handleMarkerClick}
        onMapClick={this.handleMapClick}
      />
    );
  }
}
export default InteractiveMap;
