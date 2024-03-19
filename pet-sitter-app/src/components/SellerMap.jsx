import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const SellerMap = () => {
  
  const capeTownPositions = [
    [-33.118861, 18.423300],
    [-33.928195, 18.421384],
    [-33.931141, 18.421883],
    [-33.939045, 18.421292],
    [-33.937505, 18.414402],
  ];

  const pretoriaPositions = [
    [-25.579, 28.2993],
    [-25.8477, 28.5291],
    [-25.9475, 28.2989],
    [-25.7773, 28.21287],
    [-25.7471, 28.20285],
  ];

  const durbanPositions = [
    [-29.8587, 31.0218],
    [-29.8591, 31.0224],
    [-29.8595, 31.0230],
    [-29.8599, 31.0236],
    [-29.8603, 31.0242],
  ];

  const joburgPositions = [
    [-26.2044, 28.0456],
    [-26.2048, 28.0462],
    [-26.2052, 28.0468],
    [-26.2056, 28.0474],
    [-26.2060, 28.0480],
  ];

  return (
    <>
    <div>
    <h3 className="text-lg font-bold mb-6 mt-6  font-gaya">Professionals Near You</h3>
    </div>
    <MapContainer
      center={[-26.2044, 28.0456]}
      zoom={6}
      scrollWheelZoom={true}
      style={{ minHeight: '50vh', minWidth: '50vw' }}
    >
      <TileLayer
        attribution='&copy; <p href="#">Barkey</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      
      {/* Markers for Cape Town */}
      {capeTownPositions.map((position, index) => (
        <Marker key={`cape-town-${index}`} position={position}>
          <Popup>
          Seller 
          </Popup>
        </Marker>
      ))}

      {/* Markers for Pretoria */}
      {pretoriaPositions.map((position, index) => (
        <Marker key={`pretoria-${index}`} position={position}>
          <Popup>
          Seller
          </Popup>
        </Marker>
      ))}

      {/* Markers for Durban */}
      {durbanPositions.map((position, index) => (
        <Marker key={`durban-${index}`} position={position}>
          <Popup>
          Seller
          </Popup>
        </Marker>
      ))}

      {/* Markers for Joburg */}
      {joburgPositions.map((position, index) => (
        <Marker key={`joburg-${index}`} position={position}>
          <Popup>
          Seller
          </Popup>
        </Marker>
      ))}
    </MapContainer>
    </>
  );
};

export default SellerMap;