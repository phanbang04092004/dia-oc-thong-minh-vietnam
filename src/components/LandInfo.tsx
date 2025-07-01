
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Map from './Map';
import { LandData } from '../pages/Index';

interface LandInfoProps {
  data: LandData;
}

const LandInfo: React.FC<LandInfoProps> = ({ data }) => {
  const formatArea = (area: number) => {
    return area.toLocaleString('vi-VN') + ' m²';
  };

  return (
    <div className="space-y-6">
      <Card className="shadow-md bg-white">
        <CardHeader className="bg-blue-600 text-white rounded-t-lg">
          <CardTitle className="flex items-center gap-2">
            Thông Tin Lô Đất
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6 space-y-6">
          {/* Basic Info */}
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Địa chỉ</h3>
              <p className="text-gray-600">{data.address}</p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Số thửa</h3>
                <Badge variant="outline" className="text-blue-600 border-blue-200">
                  {data.lot_number}
                </Badge>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Diện tích</h3>
                <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-100">
                  {formatArea(data.area)}
                </Badge>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Hướng cửa chính</h3>
                <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-100">
                  {data.door_orientation}
                </Badge>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Loại đất</h3>
                <Badge variant="secondary">
                  {data.land_type}
                </Badge>
              </div>
            </div>
          </div>

          <Separator />

          {/* Legal Status */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Thông tin pháp lý</h3>
            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">
              {data.legal_status}
            </Badge>
          </div>

          <Separator />

          {/* Additional Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-800">Thông tin bổ sung</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Nở hậu:</span>
                  <span className="font-medium">
                    {data.additional_info.expandable ? 'Có' : 'Không'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Số phòng tối đa:</span>
                  <span className="font-medium">{data.additional_info.max_rooms} phòng</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Độ rộng đường:</span>
                  <span className="font-medium">{data.additional_info.road_width}m</span>
                </div>
              </div>
              
              <div>
                <span className="text-gray-600 block mb-2">Tiện ích xung quanh:</span>
                <div className="flex flex-wrap gap-1">
                  {data.additional_info.nearby_facilities.map((facility, index) => (
                    <Badge key={index} variant="outline" className="text-xs border-gray-300">
                      {facility}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Map */}
      <Card className="shadow-md bg-white">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-gray-800">
            Vị trí trên bản đồ
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <Map 
            center={[data.location.lat, data.location.lng]} 
            address={data.address}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default LandInfo;
