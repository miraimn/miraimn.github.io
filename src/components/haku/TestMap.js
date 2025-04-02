import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "../../css/haku-map.scss";
import { Icon } from "leaflet";
import { useState } from "react";

export default function TestMap() {
  const pos = [47.9149166, 106.9291797];
  const marker = new Icon({
    iconUrl: require("../../assets/images/location-sign (1).png"),
    iconSize: [50, 50],
  });
  return (
    <div className="map-parent">
      <MapContainer
        center={pos}
        zoom={16}
        className="map-main"
        scrollWheelZoom={true}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={pos} icon={marker}>
          <Popup>
            <b>Sav Plaza 7th floor 703</b>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
