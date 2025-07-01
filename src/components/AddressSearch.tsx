
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Search, MapPin, RotateCcw } from 'lucide-react';

interface AddressSearchProps {
  onSearch: (address: string) => void;
  onReset: () => void;
  isLoading: boolean;
  hasResult: boolean;
}

const AddressSearch: React.FC<AddressSearchProps> = ({ 
  onSearch, 
  onReset, 
  isLoading, 
  hasResult 
}) => {
  const [address, setAddress] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (address.trim()) {
      onSearch(address.trim());
    }
  };

  const sampleAddresses = [
    '123 Đường Nguyễn Văn Cừ, Quận 5, TP.HCM',
    '456 Đường Lê Duẩn, Quận 1, TP.HCM',
    '789 Đường Hoàng Văn Thụ, Quận Tân Bình, TP.HCM'
  ];

  return (
    <Card className="p-6 shadow-lg border-0 bg-white/80 backdrop-blur-sm">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              type="text"
              placeholder="Nhập địa chỉ lô đất (VD: 123 Nguyễn Văn Cừ, Quận 5, TP.HCM)"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="pl-10 h-12 text-base"
              disabled={isLoading}
            />
          </div>
          
          <div className="flex gap-2">
            <Button 
              type="submit" 
              className="h-12 px-8 bg-blue-600 hover:bg-blue-700"
              disabled={isLoading || !address.trim()}
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                  Đang tìm...
                </div>
              ) : (
                <>
                  <Search className="h-4 w-4 mr-2" />
                  Tra cứu
                </>
              )}
            </Button>
            
            {hasResult && (
              <Button 
                type="button" 
                variant="outline"
                className="h-12 px-6"
                onClick={onReset}
              >
                <RotateCcw className="h-4 w-4 mr-2" />
                Tìm mới
              </Button>
            )}
          </div>
        </div>

        {!hasResult && (
          <div className="mt-6">
            <p className="text-sm text-gray-600 mb-3">Địa chỉ mẫu:</p>
            <div className="flex flex-wrap gap-2">
              {sampleAddresses.map((addr, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setAddress(addr)}
                  className="text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-full transition-colors"
                  disabled={isLoading}
                >
                  {addr}
                </button>
              ))}
            </div>
          </div>
        )}
      </form>
    </Card>
  );
};

export default AddressSearch;
