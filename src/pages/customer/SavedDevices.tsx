import React, { useState } from 'react';
import { Search, Trash2, Store } from 'lucide-react';
import StoreDetailsModal_Customer from '../../components/StoreDetailsModal_Customer';

export default function SavedDevices() {
  const [selectedStoreModal, setSelectedStoreModal] = useState<any>(null);
  const devices = [
    { id: 1, name: 'NVIDIA RTX 4070 SUPER', store: 'SpeedCom', location: 'กรุงเทพมหานคร', price: '24,900.-', date: '20/07/2026 14:32', iconColor: 'bg-blue-600' },
    { id: 2, name: 'KINGSTON 32GB (16*2)', store: 'JIB Online', location: 'นนทบุรี', price: '2,900.-', date: '19/07/2026 11:08', iconColor: 'bg-green-600' },
    { id: 3, name: 'INTEL Core I7-14700K', store: 'IT City', location: 'กรุงเทพมหานคร', price: '14,900.-', date: '18/07/2026 09:45', iconColor: 'bg-orange-500' },
    { id: 4, name: 'NVIDIA RTX 4070 SUPER', store: 'Advice', location: 'กรุงเทพมหานคร', price: '24,900.-', date: '17/07/2026 16:20', iconColor: 'bg-purple-500' },
    { id: 5, name: 'NVIDIA RTX 4070 SUPER', store: 'Banana IT', location: 'ชลบุรี', price: '24,900.-', date: '16/07/2026 10:15', iconColor: 'bg-cyan-500' },
  ];

  return (
    <div className="max-w-6xl mx-auto pb-10">
      <h1 className="text-2xl font-bold text-slate-800 mb-6">อุปกรณ์ที่บันทึกไว้</h1>
      
      <div className="relative mb-6">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
        <input 
          type="text" 
          placeholder="ค้นหาอุปกรณ์ หรือร้านค้า..." 
          className="w-full md:w-[400px] pl-11 pr-4 py-3 bg-white rounded-xl border border-slate-200 outline-none focus:border-blue-500 text-sm shadow-sm"
        />
      </div>

      <div className="mb-4">
        <span className="bg-white px-6 py-3 rounded-t-xl font-bold text-blue-600 border border-slate-200 border-b-0 inline-block shadow-[0_-2px_4px_rgba(0,0,0,0.02)] relative z-10">
          ทั้งหมด({devices.length})
        </span>
      </div>

      <div className="bg-white border border-slate-200 rounded-b-2xl rounded-tr-2xl overflow-hidden shadow-sm -mt-[17px] relative z-0">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[900px]">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50/50">
                <th className="py-4 px-8 font-medium text-slate-500 text-sm w-[30%]">อุปกรณ์</th>
                <th className="py-4 px-6 font-medium text-slate-500 text-sm w-[25%]">ร้านค้า</th>
                <th className="py-4 px-6 font-medium text-slate-500 text-sm text-center w-[15%]">ราคา (บาท)</th>
                <th className="py-4 px-6 font-medium text-slate-500 text-sm text-center w-[15%]">วันที่บันทึก</th>
                <th className="py-4 px-6 font-medium text-slate-500 text-sm text-center w-[15%]">จัดการ</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {devices.map((device) => (
                <tr key={device.id} className="hover:bg-slate-50 transition-colors group">
                  <td className="py-6 px-8">
                    <span className="font-bold text-slate-800 text-base">{device.name}</span>
                  </td>
                  <td className="py-6 px-6">
                    <div className="flex items-center">
                      <div className={`w-10 h-10 rounded-full ${device.iconColor} text-white flex items-center justify-center mr-4 shrink-0 shadow-sm`}>
                        <Store className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm text-slate-800 font-medium mb-0.5">{device.store}</div>
                        <div className="text-xs text-slate-400">{device.location}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-6 px-6 font-bold text-blue-600 font-mono text-center text-base">
                    {device.price}
                  </td>
                  <td className="py-6 px-6 text-sm text-slate-600 text-center">
                    {device.date}
                  </td>
                  <td className="py-6 px-6">
                    <div className="flex items-center justify-center gap-4">
                      <button 
                        onClick={() => setSelectedStoreModal({ name: device.store, location: device.location })}
                        className="border border-blue-600 bg-white text-blue-600 font-medium rounded-lg px-4 py-2 hover:bg-blue-50 transition-all text-sm shadow-sm whitespace-nowrap"
                      >
                        ดูร้านค้า
                      </button>
                      <button className="text-red-500 hover:scale-110 transition-transform opacity-80 hover:opacity-100">
                        <div className="bg-red-500 p-2 rounded-md shadow-sm">
                          <Trash2 className="w-4 h-4 text-white" />
                        </div>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <StoreDetailsModal_Customer 
        isOpen={!!selectedStoreModal} 
        onClose={() => setSelectedStoreModal(null)} 
        store={selectedStoreModal} 
      />
    </div>
  );
}
