
import React from 'react';

interface MapProps {
  center: [number, number];
  address: string;
}

const Map: React.FC<MapProps> = ({ center, address }) => {
  // This is a placeholder for the map component
  // In a real application, you would integrate with Google Maps, Leaflet, or similar
  return (
    <div className="h-64 bg-gradient-to-br from-gray-100 to-blue-100 rounded-b-lg flex items-center justify-center relative overflow-hidden">
      {/* Decorative grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-8 grid-rows-6 h-full w-full">
          {Array.from({ length: 48 }).map((_, i) => (
            <div key={i} className="border border-gray-400"></div>
          ))}
        </div>
      </div>
      
      {/* Map placeholder content */}
      <div className="text-center z-10">
        <div className="text-4xl mb-2">📍</div>
        <p className="text-gray-700 font-medium mb-1">Vị trí lô đất</p>
        <p className="text-sm text-gray-600 max-w-xs">
          {address}
        </p>
        <div className="mt-3 text-xs text-gray-500">
          Tọa độ: {center[0]}, {center[1]}
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-4 left-4 w-8 h-8 bg-blue-500 rounded-full opacity-60 animate-pulse"></div>
      <div className="absolute bottom-6 right-6 w-4 h-4 bg-gray-500 rounded-full opacity-40"></div>
      <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-blue-400 rounded-full opacity-50"></div>
    </div>
  );
};

export default Map;
