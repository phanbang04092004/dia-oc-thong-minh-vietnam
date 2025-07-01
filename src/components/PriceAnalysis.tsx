
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { PriceData } from '../pages/Index';

interface PriceAnalysisProps {
  data: PriceData;
}

const PriceAnalysis: React.FC<PriceAnalysisProps> = ({ data }) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(price);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('vi-VN');
  };

  const formatDistance = (distance: number) => {
    return distance < 1000 ? `${distance}m` : `${(distance / 1000).toFixed(1)}km`;
  };

  return (
    <div className="space-y-6">
      <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
        <CardHeader className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-t-lg">
          <CardTitle className="flex items-center gap-2">
            💰 Ước Tính Giá Trị
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6 space-y-6">
          {/* Price Estimation */}
          <div className="space-y-4">
            <div className="text-center p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg">
              <div className="space-y-2">
                <p className="text-sm text-gray-600">Giá ước tính</p>
                <p className="text-2xl font-bold text-green-600">
                  {formatPrice(data.estimated_price_per_m2)}/m²
                </p>
                <p className="text-xl font-semibold text-gray-800">
                  Tổng: {formatPrice(data.total_estimated_price)}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-3 bg-blue-50 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">Thanh khoản</p>
                <p className="text-lg font-semibold text-blue-600">
                  {data.liquidity_days} ngày
                </p>
              </div>
              <div className="text-center p-3 bg-purple-50 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">Giá TB khu vực</p>
                <p className="text-lg font-semibold text-purple-600">
                  {formatPrice(data.average_area_price)}/m²
                </p>
              </div>
            </div>
          </div>

          <Separator />

          {/* Nearby Transactions */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Giao dịch gần đây</h3>
            <div className="space-y-3">
              {data.nearby_transactions.map((transaction, index) => (
                <div key={index} className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex-1">
                      <p className="font-medium text-gray-800 mb-1">
                        {transaction.address}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-2">
                        <Badge variant="outline" className="text-xs">
                          {transaction.area}m²
                        </Badge>
                        <Badge variant="outline" className="text-xs text-blue-600">
                          Cách {formatDistance(transaction.distance_m)}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">
                      {formatDate(transaction.date)}
                    </span>
                    <div className="text-right">
                      <p className="font-semibold text-green-600">
                        {formatPrice(transaction.price)}
                      </p>
                      <p className="text-xs text-gray-500">
                        {formatPrice(transaction.price / transaction.area)}/m²
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Separator />

          {/* Price Trend Chart Placeholder */}
          <div className="p-4 bg-gray-50 rounded-lg text-center">
            <p className="text-sm text-gray-600 mb-2">Xu hướng giá 12 tháng qua</p>
            <div className="h-32 bg-gradient-to-r from-green-200 via-blue-200 to-green-200 rounded flex items-center justify-center">
              <p className="text-gray-500">📈 Biểu đồ xu hướng giá</p>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Giá đất khu vực này tăng trung bình 8.5% trong 12 tháng qua
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PriceAnalysis;
