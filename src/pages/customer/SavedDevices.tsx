import React from 'react';
import { Trash2 } from 'lucide-react';

export default function SavedDevices() {
  const devices = [
    { id: 1, name: 'NVIDIA RTX 4070 SUPER', price: '24,900.-' },
    { id: 2, name: 'KINGSTON 32GB (16*2)', price: '2,900.-' },
    { id: 3, name: 'INTEL Core I7-14700K', price: '14,900.-' },
    { id: 4, name: 'NVIDIA RTX 4070 SUPER', price: '24,900.-' },
    { id: 5, name: 'NVIDIA RTX 4070 SUPER', price: '24,900.-' },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-blue-600 mb-6">อุปกรณ์ที่บันทึกไว้</h1>
      
      <div className="mb-4">
        <span className="bg-white/60 backdrop-blur-md px-6 py-3 rounded-t-2xl font-bold text-blue-600 border border-white border-b-0 inline-block">
          ทั้งหมด({devices.length})
        </span>
      </div>

      <div className="bg-white/60 backdrop-blur-lg border border-white rounded-b-3xl rounded-tr-3xl overflow-hidden shadow-xl">
        {devices.map((device, index) => (
          <div 
            key={device.id} 
            className={`flex items-center justify-between p-6 ${index !== devices.length - 1 ? 'border-b border-white' : ''} hover:bg-white/40 transition-colors`}
          >
            <div className="font-bold text-lg text-slate-800 flex-1">{device.name}</div>
            <div className="font-bold text-lg text-blue-600 w-32 font-mono">{device.price}</div>
            <div className="flex items-center gap-6">
              <button className="border border-white bg-white/50 text-blue-600 font-medium rounded-2xl px-6 py-2.5 hover:bg-white/80 transition-all shadow-sm">
                ดูร้านค้า
              </button>
              <button className="text-red-500 hover:scale-110 transition-transform">
                <Trash2 className="w-8 h-8 fill-red-500 text-white" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
