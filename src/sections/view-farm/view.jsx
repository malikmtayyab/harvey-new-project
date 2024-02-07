import React, { useEffect, useState } from 'react';
/* eslint-disable */
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-fullscreen/dist/leaflet.fullscreen.css';
import 'leaflet-fullscreen/dist/Leaflet.fullscreen';
import { GetRequest } from 'src/services/ApiService';
import UrlService from 'src/services/UrlService';

const FullScreenControl = () => {

  const map = useMap();

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
  const center = [7.1881, 21.0936];
const [markers,setMarkers]=useState()


  const getTanksDatabyFarm=async(id)=>
  {
    const res=await GetRequest(`${UrlService.getTanksByFarmId}/${id}`)
    setMarkers(res.data)
  }
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    getTanksDatabyFarm(id)
  }, []);
  
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
        zoom={4}
        style={{ height: '100%', width: '100%', borderRadius: 4 }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        {markers && markers.length>0 && markers.map((marker, index) => (
          <Marker key={index} position={[marker.latitude, marker.longitude]}>
            <Popup>  
              
<h5>

  Contents: {marker.content}
</h5>
<h5>

  Volume: {marker.volume}
</h5>
<h5>

  Latitude: {marker.latitude}
</h5>

<h5>

  Longitude: {marker.longitude}
</h5>
              
            
            </Popup>
          </Marker>
        ))}
        <FullScreenControl />
      </MapContainer>
    
    </div>
  );
}
