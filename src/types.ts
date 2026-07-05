export type Role = 'GUEST' | 'USER' | 'STORE' | 'ADMIN' | null;

export type HardwareCategory = 'CPU' | 'VGA' | 'RAM' | 'MAINBOARD' | 'STORAGE' | 'PSU' | 'COOLER';

export interface HardwareItem {
  id: string;
  category: HardwareCategory;
  brand: string;
  model: string;
  spec1: string;
  spec2: string;
  price: string;
  isAvailable: boolean;
}

export interface Store {
  id: string;
  name: string;
  rating: number;
  reviews: number;
  location: string;
  isSaved?: boolean;
}
