import React from 'react';
import { Plus, Search, Edit2, Trash2, RotateCcw } from 'lucide-react';

export default function ProductManagement() {
  const products = [
    { id: 1, name: 'Intel Core i7-14700K', cat: 'CPU', brand: 'Intel', price: '14,900', stock: 12, status: 'พร้อมขาย' },
    { id: 2, name: 'AMD Ryzen 7 7800X3D', cat: 'CPU', brand: 'AMD', price: '15,900', stock: 0, status: 'หมดสต๊อก' },
    { id: 3, name: 'MSI GeForce RTX 4070 SUPER', cat: 'VGA', brand: 'MSI', price: '24,900', stock: 8, status: 'พร้อมขาย' },
    { id: 4, name: 'ASUS GeForce RTX 4060 Ti', cat: 'VGA', brand: 'ASUS', price: '14,900', stock: 0, status: 'หมดสต๊อก' },
    { id: 5, name: 'Kingston FURY 16GB (8x2) DDR5 5600', cat: 'RAM', brand: 'Kingston', price: '2,900', stock: 25, status: 'พร้อมขาย' },
    { id: 6, name: 'Corsair Vengeance 32GB (16x2) DDR5 6000', cat: 'RAM', brand: 'Corsair', price: '5,990', stock: 5, status: 'พร้อมขาย' },
    { id: 7, name: 'WD Black SN850X 1TB NVMe', cat: 'STORAGE', brand: 'Western Digital', price: '4,390', stock: 15, status: 'พร้อมขาย' },
  ];

  return (
    <div className="max-w-7xl mx-auto h-full flex flex-col">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">จัดการสินค้า Hardware</h1>
          <p className="text-slate-500 text-sm mt-1">เพิ่ม แก้ไข หรือลบสินค้าในร้านของคุณ</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-2xl px-5 py-2.5 flex items-center transition-all shadow-lg shadow-blue-200">
          <Plus className="w-5 h-5 mr-1" />
          เพิ่มสินค้า
        </button>
      </div>

      <div className="bg-white/60 backdrop-blur-lg border border-white rounded-3xl flex-1 flex flex-col overflow-hidden shadow-xl">
        {/* Filters */}
        <div className="p-5 bg-white/40 border-b border-white flex flex-wrap gap-4 items-center">
          <div className="relative flex-1 min-w-[200px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input type="text" placeholder="ค้นหาสินค้า..." className="w-full border border-slate-200 rounded-lg pl-9 pr-3 py-2 text-sm outline-none focus:border-blue-500" />
          </div>
          
          <div className="flex items-center gap-2">
            <div className="flex flex-col">
              <span className="text-xs text-slate-500 mb-1">หมวดหมู่</span>
              <select className="border border-slate-200 rounded-lg px-3 py-1.5 text-sm bg-white outline-none w-32">
                <option>ทั้งหมด</option>
              </select>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-slate-500 mb-1">ยี่ห้อ</span>
              <select className="border border-slate-200 rounded-lg px-3 py-1.5 text-sm bg-white outline-none w-32">
                <option>ทั้งหมด</option>
              </select>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-slate-500 mb-1">สถานะ</span>
              <select className="border border-slate-200 rounded-lg px-3 py-1.5 text-sm bg-white outline-none w-32">
                <option>ทั้งหมด</option>
              </select>
            </div>
          </div>
          
          <button className="mt-5 border border-slate-200 text-slate-600 hover:bg-slate-50 px-4 py-1.5 rounded-lg text-sm font-medium flex items-center h-[34px]">
            <RotateCcw className="w-4 h-4 mr-2" />
            ล้างตัวกรอง
          </button>
        </div>

        {/* Table */}
        <div className="flex-1 overflow-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-white/70 backdrop-blur-md text-slate-400 text-[11px] uppercase tracking-wider font-bold border-b border-white sticky top-0">
              <tr>
                <th className="px-6 py-4 w-12"><input type="checkbox" className="rounded border-slate-300" /></th>
                <th className="px-6 py-4">สินค้า</th>
                <th className="px-6 py-4">หมวดหมู่</th>
                <th className="px-6 py-4">ยี่ห้อ</th>
                <th className="px-6 py-4">ราคา (บาท)</th>
                <th className="px-6 py-4 text-center">สต๊อก</th>
                <th className="px-6 py-4">สถานะ</th>
                <th className="px-6 py-4 text-center">จัดการ</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {products.map(p => (
                <tr key={p.id} className="hover:bg-white/50 transition-colors">
                  <td className="px-6 py-4"><input type="checkbox" className="rounded border-slate-300" /></td>
                  <td className="px-6 py-4 font-medium text-slate-800">{p.name}</td>
                  <td className="px-6 py-4 text-slate-500">{p.cat}</td>
                  <td className="px-6 py-4 text-slate-500">{p.brand}</td>
                  <td className="px-6 py-4 text-blue-600 font-medium">{p.price}</td>
                  <td className="px-6 py-4 text-center text-slate-700">{p.stock}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                      p.status === 'พร้อมขาย' ? 'bg-green-50 text-green-700' : 'bg-orange-50 text-orange-700'
                    }`}>
                      <span className={`w-1.5 h-1.5 rounded-full mr-1.5 ${p.status === 'พร้อมขาย' ? 'bg-green-500' : 'bg-orange-500'}`}></span>
                      {p.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center space-x-2">
                      <button className="p-1.5 text-blue-600 hover:bg-blue-50 rounded border border-blue-200"><Edit2 className="w-4 h-4" /></button>
                      <button className="p-1.5 text-red-600 hover:bg-red-50 rounded border border-red-200"><Trash2 className="w-4 h-4" /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="p-5 border-t border-white flex justify-between items-center text-sm text-slate-600 bg-white/40">
           <div className="flex items-center">
             <span>แสดง</span>
             <select className="mx-2 border border-slate-200 rounded px-2 py-1 bg-white"><option>10</option></select>
             <span>รายการ</span>
           </div>
           <div className="flex items-center space-x-4">
             <span>1-10 จาก 45 รายการ</span>
             <div className="flex space-x-1">
               <button className="w-8 h-8 rounded hover:bg-slate-200 flex items-center justify-center">{'<'}</button>
               <button className="w-8 h-8 rounded border border-blue-500 text-blue-600 font-medium flex items-center justify-center bg-white">1</button>
               <button className="w-8 h-8 rounded hover:bg-slate-200 flex items-center justify-center">2</button>
               <button className="w-8 h-8 rounded hover:bg-slate-200 flex items-center justify-center">3</button>
               <button className="w-8 h-8 rounded hover:bg-slate-200 flex items-center justify-center">{'>'}</button>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
}
