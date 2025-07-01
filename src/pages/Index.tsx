
import React, { useState } from 'react';
import AddressSearch from '../components/AddressSearch';
import LandInfo from '../components/LandInfo';
import PriceAnalysis from '../components/PriceAnalysis';
import Map from '../components/Map';
import { getDataByAddress } from '../data/mockData';

export interface LandData {
  address: string;
  lot_number: string;
  area: number;
  shape: string;
  door_orientation: string;
  land_type: string;
  legal_status: string;
  location: {
    lat: number;
    lng: number;
  };
  additional_info: {
    expandable: boolean;
    max_rooms: number;
    road_width: number;
    nearby_facilities: string[];
  };
}

export interface PriceData {
  estimated_price_per_m2: number;
  total_estimated_price: number;
  liquidity_days: number;
  average_area_price: number;
  price_trend: Array<{
    month: string;
    price: number;
  }>;
  nearby_transactions: Array<{
    address: string;
    date: string;
    area: number;
    price: number;
    distance_m: number;
  }>;
}

const Index = () => {
  const [searchResult, setSearchResult] = useState<{land: LandData, price: PriceData} | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (address: string) => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      const result = getDataByAddress(address);
      setSearchResult(result);
      setIsLoading(false);
    }, 1500);
  };

  const handleReset = () => {
    setSearchResult(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Tra Cứu Thông Tin Đất Đai
          </h1>
          <p className="text-gray-600">
            Tìm hiểu thông tin chi tiết và ước tính giá trị lô đất của bạn
          </p>
        </div>

        {/* Search Section */}
        <AddressSearch 
          onSearch={handleSearch} 
          onReset={handleReset}
          isLoading={isLoading}
          hasResult={!!searchResult}
        />

        {/* Map Section - Show when no results */}
        {!searchResult && (
          <div className="mt-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                Chọn vị trí trên bản đồ
              </h2>
              <Map 
                center={[10.7769, 106.7009]} 
                address="TP.HCM"
              />
            </div>
          </div>
        )}

        {/* Results Section */}
        {searchResult && (
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <LandInfo data={searchResult.land} />
            <PriceAnalysis data={searchResult.price} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
