import { HardwareItem, Store } from './types';

const generateMockHardware = (category: string, catKey: string): HardwareItem[] => [
  { id: `${catKey}1`, category: category as any, brand: 'Brand A', model: `Model X 1000 (${category}) (มี)`, spec1: 'spec info', spec2: 'spec info', price: '12,900.-', isAvailable: true },
  { id: `${catKey}2`, category: category as any, brand: 'Brand B', model: `Model Y 2000 (${category}) (มี)`, spec1: 'spec info', spec2: 'spec info', price: '15,900.-', isAvailable: true },
  { id: `${catKey}3`, category: category as any, brand: 'Brand C', model: `Model Z 3000 (${category}) (มี)`, spec1: 'spec info', spec2: 'spec info', price: '8,500.-', isAvailable: true },
  { id: `${catKey}4`, category: category as any, brand: 'Brand D', model: `Model W 4000 (${category}) (ไม่มี)`, spec1: 'spec info', spec2: 'spec info', price: '5,500.-', isAvailable: false },
];

export const mockHardware: Record<string, HardwareItem[]> = {
  CPU: generateMockHardware('CPU', 'c'),
  MAINBOARD: generateMockHardware('MAINBOARD', 'mb'),
  VGA: generateMockHardware('VGA', 'v'),
  RAM: generateMockHardware('RAM', 'r'),
  STORAGE: generateMockHardware('STORAGE', 's'),
  PSU: generateMockHardware('PSU', 'p'),
  COOLER: generateMockHardware('COOLER', 'cl'),
};

export const mockStores: Store[] = [
  { id: 's1', name: 'SpeedCom', rating: 4.8, reviews: 523, location: 'กรุงเทพมหานคร', isSaved: true },
  { id: 's2', name: 'JIB Online', rating: 4.7, reviews: 1235, location: 'นนทบุรี', isSaved: false },
  { id: 's3', name: 'Advice Online', rating: 4.6, reviews: 890, location: 'กรุงเทพมหานคร', isSaved: true },
  { id: 's4', name: 'IT City', rating: 4.5, reviews: 450, location: 'เชียงใหม่', isSaved: true },
  { id: 's5', name: 'ComTech', rating: 4.9, reviews: 210, location: 'ขอนแก่น', isSaved: true },
];

export const WIREFRAME_IMAGE = 'https://placehold.co/600x400/e2e8f0/64748b?text=Image';
