import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
const BuyerMap = () => {
    const capeTownPositions = [
        [-33.918861, 18.423300],
        [-33.928195, 18.421384],
        [-33.931141, 18.421883],
        [-33.939045, 18.421292],
        [-33.937505, 18.414402],
      ];
    
      const pretoriaPositions = [
        [-24.7479, 28.2293],
        [-25.7477, 28.2291],
        [-25.7475, 28.2289],
        [-25.7473, 28.2287],
        [-25.7471, 28.2285],
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
        <h3 className="text-3xl font-bold mb-6 mt-6 text-center font-gaya">Owners Near You</h3>
        <MapContainer
          center={[-26.2044, 28.0456]} 
          zoom={12}
          scrollWheelZoom={true}
          style={{ minHeight: '50vh', minWidth: '50vw', marginTop:'5%'}}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          
          {/* Markers for Cape Town */}
          {capeTownPositions.map((position, index) => (
            <Marker key={`cape-town-${index}`} position={position}>
              <Popup>
              Owner around Durban
              </Popup>
            </Marker>
          ))}
    
          {/* Markers for Pretoria */}
          {pretoriaPositions.map((position, index) => (
            <Marker key={`pretoria-${index}`} position={position}>
              <Popup>
              Owner around Durban
              </Popup>
            </Marker>
          ))}
    
          {/* Markers for Durban */}
          {durbanPositions.map((position, index) => (
            <Marker key={`durban-${index}`} position={position}>
              <Popup>
              Owner around Durban
              </Popup>
            </Marker>
          ))}
    
          {/* Markers for Joburg */}
          {joburgPositions.map((position, index) => (
            <Marker key={`joburg-${index}`} position={position}>
              <Popup>
              Owner around Johannesburg 
              </Popup>
            </Marker>
          ))}
        </MapContainer>
        </>
      );
    };
    
    export default BuyerMap;