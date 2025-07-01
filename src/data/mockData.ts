
import { LandData, PriceData } from '../pages/Index';

export const landDataMap: Record<string, {land: LandData, price: PriceData}> = {
  "123 Đường Nguyễn Văn Cừ, Quận 5, TP.HCM": {
    land: {
      address: "123 Đường Nguyễn Văn Cừ, Phường 4, Quận 5, TP.HCM",
      lot_number: "234/15",
      area: 85.5,
      shape: "hình chữ nhật",
      door_orientation: "Đông Nam",
      land_type: "Đất ở đô thị",
      legal_status: "Sổ đỏ đầy đủ, không tranh chấp",
      location: {
        lat: 10.7589,
        lng: 106.6821
      },
      additional_info: {
        expandable: true,
        max_rooms: 8,
        road_width: 12,
        nearby_facilities: [
          "Bệnh viện Chợ Rẫy (1.2km)",
          "Trường THPT Nguyễn Du (800m)",
          "Chợ Kim Biên (500m)",
          "ATM/Ngân hàng (200m)",
          "Công viên 23/9 (1km)"
        ]
      }
    },
    price: {
      estimated_price_per_m2: 95000000,
      total_estimated_price: 8120000000,
      liquidity_days: 45,
      average_area_price: 92000000,
      nearby_transactions: [
        {
          address: "119 Nguyễn Văn Cừ, Phường 4, Quận 5",
          date: "2024-12-01",
          area: 90,
          price: 8800000000,
          distance_m: 150
        },
        {
          address: "125 Nguyễn Văn Cừ, Phường 4, Quận 5",
          date: "2024-11-15",
          area: 100,
          price: 9700000000,
          distance_m: 120
        },
        {
          address: "117 Nguyễn Văn Cừ, Phường 4, Quận 5",
          date: "2024-11-03",
          area: 75,
          price: 7200000000,
          distance_m: 180
        }
      ]
    }
  },
  
  "456 Đường Lê Duẩn, Quận 1, TP.HCM": {
    land: {
      address: "456 Đường Lê Duẩn, Phường Bến Nghé, Quận 1, TP.HCM",
      lot_number: "102/8",
      area: 120.0,
      shape: "hình thang",
      door_orientation: "Tây Nam",
      land_type: "Đất ở đô thị",
      legal_status: "Sổ đỏ chính chủ, không thế chấp",
      location: {
        lat: 10.7769,
        lng: 106.7009
      },
      additional_info: {
        expandable: false,
        max_rooms: 12,
        road_width: 20,
        nearby_facilities: [
          "Bệnh viện Chợ Rẫy (2km)",
          "Trường THPT Lê Quý Đôn (600m)",
          "Chợ Bến Thành (1.5km)",
          "Ngân hàng Vietcombank (100m)",
          "Công viên Tao Đàn (800m)"
        ]
      }
    },
    price: {
      estimated_price_per_m2: 150000000,
      total_estimated_price: 18000000000,
      liquidity_days: 30,
      average_area_price: 145000000,
      nearby_transactions: [
        {
          address: "450 Lê Duẩn, Phường Bến Nghé, Quận 1",
          date: "2024-11-20",
          area: 110,
          price: 16500000000,
          distance_m: 80
        },
        {
          address: "462 Lê Duẩn, Phường Bến Nghé, Quận 1",
          date: "2024-11-10",
          area: 135,
          price: 20250000000,
          distance_m: 120
        },
        {
          address: "448 Lê Duẩn, Phường Bến Nghé, Quận 1",
          date: "2024-10-25",
          area: 100,
          price: 14800000000,
          distance_m: 150
        }
      ]
    }
  },

  "789 Đường Hoàng Văn Thụ, Quận Tân Bình, TP.HCM": {
    land: {
      address: "789 Đường Hoàng Văn Thụ, Phường 4, Quận Tân Bình, TP.HCM",
      lot_number: "567/22",
      area: 95.8,
      shape: "hình chữ nhật",
      door_orientation: "Bắc",
      land_type: "Đất ở đô thị",
      legal_status: "Sổ đỏ đầy đủ, đã có GPXD",
      location: {
        lat: 10.7992,
        lng: 106.6542
      },
      additional_info: {
        expandable: true,
        max_rooms: 10,
        road_width: 16,
        nearby_facilities: [
          "Sân bay Tân Sơn Nhất (3km)",
          "Trường ĐH Kinh tế (1.2km)",
          "Chợ Tân Bình (800m)",
          "Ngân hàng ACB (300m)",
          "Công viên Hoàng Văn Thụ (500m)"
        ]
      }
    },
    price: {
      estimated_price_per_m2: 110000000,
      total_estimated_price: 10538000000,
      liquidity_days: 35,
      average_area_price: 108000000,
      nearby_transactions: [
        {
          address: "785 Hoàng Văn Thụ, Phường 4, Quận Tân Bình",
          date: "2024-12-05",
          area: 88,
          price: 9680000000,
          distance_m: 90
        },
        {
          address: "793 Hoàng Văn Thụ, Phường 4, Quận Tân Bình",
          date: "2024-11-18",
          area: 105,
          price: 11550000000,
          distance_m: 110
        },
        {
          address: "781 Hoàng Văn Thụ, Phường 4, Quận Tân Bình",
          date: "2024-11-02",
          area: 92,
          price: 10120000000,
          distance_m: 140
        }
      ]
    }
  }
};

export const getDataByAddress = (address: string) => {
  // Tìm kiếm gần đúng
  const foundKey = Object.keys(landDataMap).find(key => 
    key.toLowerCase().includes(address.toLowerCase()) || 
    address.toLowerCase().includes(key.toLowerCase())
  );
  
  return foundKey ? landDataMap[foundKey] : landDataMap["123 Đường Nguyễn Văn Cừ, Quận 5, TP.HCM"];
};
