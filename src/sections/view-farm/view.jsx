import React, { useEffect } from 'react';
/* eslint-disable */
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-fullscreen/dist/leaflet.fullscreen.css';
import 'leaflet-fullscreen/dist/Leaflet.fullscreen';

const FullScreenControl = () => {


  const map = useMap();
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('id');
   
  }, []);
  return (
    <div className="leaflet-control-fullscreen leaflet-bar leaflet-control">
      <a
        className="leaflet-control-fullscreen-button leaflet-bar-part leaflet-bar-part-top-and-bottom "
        href="#"
        style={{
          marginTop: 80,
          marginLeft: 10,
        }}
        title="Toggle Fullscreen"
        role="button"
        onClick={() => {
          map.toggleFullscreen();
        }}
      >
        ⤢
      </a>
    </div>
  );
};

export default function ViewFarm() {
  const center = [17.0, -61.8];
  const markers = [
    { position: [16.97, -61.7], content: 'Marker 1' },
    { position: [17.15, -61.8], content: 'Marker 2' },
    { position: [17.05, -61.6], content: 'Marker 3' },
  ];

  return (
    <div
      style={{
        width: 'full',
        height: '85vh',
      }}
    >
      {/* <h3>Map showing tank farms</h3> */}
      <MapContainer
        center={center}
        zoom={12}
        style={{ height: '100%', width: '100%', borderRadius: 4 }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        {markers.map((marker, index) => (
          <Marker key={index} position={marker.position}>
            <Popup>{marker.content}</Popup>
          </Marker>
        ))}
        <FullScreenControl />
      </MapContainer>
         
    </div>
  );
}
