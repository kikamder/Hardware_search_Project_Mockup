import React, { useState } from 'react';
import { useAppContext } from '../../AppContext';
import { mockHardware } from '../../data';
import { Cpu, SquareDashedBottom, MonitorPlay, MemoryStick, HardDrive, Battery, Fan, Search } from 'lucide-react';

export default function SelectHardware() {
  const { navigate, selectedCategory, setSelectedCategory, selectedHardwareIds, setSelectedHardwareIds } = useAppContext();
  
  const cats = [
    { id: 'CPU', label: 'CPU', icon: Cpu },
    { id: 'MAINBOARD', label: 'Mainboard', icon: SquareDashedBottom },
    { id: 'VGA', label: 'VGA Card', icon: MonitorPlay },
    { id: 'RAM', label: 'Memory', icon: MemoryStick },
    { id: 'STORAGE', label: 'Storage', icon: HardDrive },
    { id: 'PSU', label: 'Power Supply', icon: Battery },
    { id: 'COOLER', label: 'CPU Cooler', icon: Fan },
  ];

  const currentHardware = mockHardware[selectedCategory] || [];

  const handleToggleHardware = (id: string) => {
    setSelectedHardwareIds(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const handleSearchStores = () => {
    navigate('CUSTOMER_FIND_STORE');
  };

  return (
    <div className="flex h-full gap-6">
      {/* Category Sidebar */}
      <div className="w-56 bg-white/60 backdrop-blur-lg border border-white shadow-xl rounded-3xl flex flex-col p-4 space-y-2 h-fit">
        <div className="px-4 py-3 font-bold text-slate-700 bg-white/40 rounded-xl mb-2 text-center border border-white/60">
          เลือกฮาร์ดแวร์ที่ต้องการ
        </div>
        {cats.map(cat => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all ${
              selectedCategory === cat.id ? 'bg-blue-50 text-blue-700 shadow-sm border border-white' : 'text-slate-600 hover:bg-white/50'
            }`}
          >
            <div className="flex items-center">
              <cat.icon className="w-5 h-5 mr-3" />
              {cat.label}
            </div>
            {/* Show checkmark if any item in this category is selected */}
            {mockHardware[cat.id]?.some(h => selectedHardwareIds.includes(h.id)) && (
              <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
              </div>
            )}
          </button>
        ))}
        
        <div className="mt-4 pt-4">
          <button
            onClick={handleSearchStores}
            disabled={selectedHardwareIds.length === 0}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-bold py-3 rounded-2xl flex items-center justify-center transition-all shadow-lg shadow-blue-200"
          >
            <Search className="w-5 h-5 mr-2" />
            ค้นหาร้านค้า
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-white/60 backdrop-blur-lg border border-white rounded-3xl shadow-xl flex flex-col overflow-hidden">
        {/* Filters bar */}
        <div className="p-5 bg-slate-50/80 border-b border-slate-200 flex flex-wrap gap-4 items-center justify-between">
          <div className="flex gap-4">
            <div className="flex items-center">
              <span className="text-sm text-slate-500 mr-2">Brand</span>
              <select className="border border-slate-200 rounded-lg px-3 py-1.5 text-sm bg-white outline-none">
                <option>ทั้งหมด</option>
              </select>
            </div>
            <div className="flex items-center">
              <span className="text-sm text-slate-500 mr-2">Series</span>
              <select className="border border-slate-200 rounded-lg px-3 py-1.5 text-sm bg-white outline-none">
                <option>ทั้งหมด</option>
              </select>
            </div>
          </div>
          
          <div className="flex gap-2">
            <div className="relative">
              <input type="text" placeholder="ค้นหาสินค้า..." className="border border-slate-200 rounded-lg pl-3 pr-8 py-1.5 text-sm w-48 outline-none" />
              <Search className="w-4 h-4 text-slate-400 absolute right-2.5 top-2" />
            </div>
            <button className="bg-blue-600 text-white px-5 py-1.5 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors">ค้นหา</button>
          </div>
        </div>

        {/* Table Header */}
        <div className="px-6 py-5 flex justify-between items-end bg-white/40">
          <h2 className="text-lg font-bold text-slate-800">
            {cats.find(c => c.id === selectedCategory)?.label} <span className="text-blue-500 font-normal">({currentHardware.length} รายการ)</span>
          </h2>
          <div className="flex items-center">
            <span className="text-sm text-slate-500 mr-2">เรียงตาม</span>
            <select className="border border-slate-200 rounded-lg px-3 py-1 text-sm bg-white outline-none">
              <option>ราคา: ต่ำ - สูง</option>
            </select>
          </div>
        </div>

        {/* Table */}
        <div className="flex-1 overflow-auto">
          <table className="w-full text-sm text-left">
            <thead className="sticky top-0 bg-white/90 backdrop-blur text-slate-400 text-[11px] uppercase tracking-wider font-bold border-y border-slate-100">
              <tr>
                <th className="px-6 py-3 text-center">Brand</th>
                <th className="px-6 py-3">Model</th>
                <th className="px-6 py-3 text-center">Spec</th>
                <th className="px-6 py-3 text-center">Spec</th>
                <th className="px-6 py-3 text-center">ราคา</th>
                <th className="px-6 py-3 text-center">เลือก</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {currentHardware.map(item => (
                <tr key={item.id} className="hover:bg-blue-50/30 transition-colors">
                  <td className="px-6 py-4 text-center font-semibold text-slate-700">{item.brand}</td>
                  <td className="px-6 py-4">{item.model}</td>
                  <td className="px-6 py-4 text-center text-slate-500 text-sm">{item.spec1}</td>
                  <td className="px-6 py-4 text-center text-slate-500 text-sm">{item.spec2}</td>
                  <td className="px-6 py-4 text-center font-mono font-bold text-blue-600">{item.price}</td>
                  <td className="px-6 py-4 text-center">
                    <input 
                      type="checkbox" 
                      className="w-5 h-5 cursor-pointer accent-blue-600 rounded border-slate-300"
                      checked={selectedHardwareIds.includes(item.id)}
                      onChange={() => handleToggleHardware(item.id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="p-5 bg-slate-50/80 border-t border-slate-200 flex justify-center items-center text-sm text-slate-600">
           <button className="mr-2 text-slate-400">{'<'} ก่อนหน้า</button>
           <div className="flex space-x-1">
             <button className="w-8 h-8 rounded bg-blue-500 text-white flex items-center justify-center font-medium">1</button>
             <button className="w-8 h-8 rounded hover:bg-slate-100 flex items-center justify-center">2</button>
             <button className="w-8 h-8 rounded hover:bg-slate-100 flex items-center justify-center">3</button>
           </div>
           <button className="ml-2 text-blue-500 font-medium">ถัดไป {'>'}</button>
        </div>
      </div>
    </div>
  );
}
