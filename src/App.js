import React, { Component } from 'react';
import './App.css';
import GoogleMapReact from 'google-map-react';

const mapsVisible = ({ text }) => <div>{text}</div>;

export default class App extends Component {
    static defaultProps = {
      center : {
        lat : 59.95,
        lng : 30.33
      },
      zoom : 11
    };

    render() {
      const API_KEY = 'AIzaSyDc9d5xrUHdwYJbABSBU9LE9wLxmXRUM2k';
      return (
        <div style={{ height:'500px', width:'80%', margin:'30px' }}>
           <GoogleMapReact
             bootstrapURLKeys={{ key: API_KEY }}
             defaultCenter = { this.props.center }
             defaultZoom = { this.props.zoom }
           />

           <mapsVisible
             lat={59.955413}
             lng={30.337844}
             text="My App"
           />
        </div>
      );
    }
  }
