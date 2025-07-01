
import { LandData, PriceData } from '../pages/Index';

export const landData: LandData = {
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
};

export const priceData: PriceData = {
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
    },
    {
      address: "131 Nguyễn Văn Cừ, Phường 4, Quận 5",
      date: "2024-10-28",
      area: 95,
      price: 9100000000,
      distance_m: 200
    },
    {
      address: "121 Nguyễn Văn Cừ, Phường 4, Quận 5",
      date: "2024-10-15",
      area: 80,
      price: 7600000000,
      distance_m: 95
    }
  ]
};
