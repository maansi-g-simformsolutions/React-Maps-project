import React from "react";
import ReactDOM from "react-dom";
import { Map, TileLayer } from "react-leaflet";
import "./styles.css";

export default class App extends React.Component {
  componentDidMount() {
    const map = this.refs.map.leafletElement;
    console.log(map.getBounds());
  }
  render() {
    return (
      <Map ref="map" zoom={13} center={[53.8008, -1.5491]}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
      </Map>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
