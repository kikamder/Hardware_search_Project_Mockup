import React, { useState } from 'react';
import { Search, ArrowLeft, Heart, Phone, MessageCircle, Facebook } from 'lucide-react';
import { useAppContext } from '../../AppContext';

export default function StoreProducts() {
  const { navigate } = useAppContext();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const products = [
    { id: 1, name: 'Intel Core i7-14700K', cat: 'CPU', brand: 'Intel', price: '14,900',  status: 'พร้อมขาย' },
    { id: 2, name: 'AMD Ryzen 7 7800X3D', cat: 'CPU', brand: 'AMD', price: '15,900',  status: 'หมดสต๊อก' },
    { id: 3, name: 'MSI GeForce RTX 4070 SUPER', cat: 'VGA', brand: 'MSI', price: '24,900', status: 'พร้อมขาย' },
    { id: 4, name: 'ASUS GeForce RTX 4060 Ti', cat: 'VGA', brand: 'ASUS', price: '14,900', status: 'หมดสต๊อก' },
    { id: 5, name: 'Kingston FURY 16GB (8x2) DDR5 5600', cat: 'RAM', brand: 'Kingston', price: '2,900', status: 'พร้อมขาย' },
    { id: 6, name: 'Corsair Vengeance 32GB (16x2) DDR5 6000', cat: 'RAM', brand: 'Corsair', price: '5,990',  status: 'พร้อมขาย' },
    { id: 7, name: 'WD Black SN850X 1TB NVMe', cat: 'STORAGE', brand: 'Western Digital', price: '4,390',  status: 'พร้อมขาย' },
  ];

  const filteredProducts = products.filter(p => {
    if (selectedCategory === 'All') return true;
    return p.cat === selectedCategory || (p.cat === 'STORAGE' && selectedCategory === 'Storage') || (p.cat === 'MAINBOARD' && selectedCategory === 'Mainboard');
  });

  return (
    <div className="max-w-7xl mx-auto h-full flex flex-col pb-2">
      <div className="flex items-center mb-4">
        <button 
          onClick={() => navigate('CUSTOMER_FIND_STORE')}
          className="mr-4 p-2 text-slate-500 hover:bg-slate-200 rounded-full transition-colors"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-2xl font-bold text-slate-800">สินค้าในร้านค้า: JJ Computer</h1>
      </div>

      <div className="bg-white rounded-2xl p-5 border border-slate-200 mb-4 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-sm">
        <div className="flex items-center gap-6">
          <div className="w-20 h-20 bg-slate-900 text-white rounded-full flex flex-col items-center justify-center shadow-md shrink-0">
            <span className="text-2xl font-bold leading-none">JJ</span>
            <span className="text-[8px] tracking-widest mt-1 opacity-80 uppercase">COMPUTER</span>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-1">
              <h3 className="text-xl font-bold text-slate-800">JJ Computer</h3>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-green-50 text-green-700 rounded-full text-[11px] font-medium border border-green-200">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                เปิดให้บริการ
              </div>
            </div>
            <p className="text-slate-600 text-sm mb-3">จำหน่ายอุปกรณ์คอมพิวเตอร์ และสินค้าไอทีคุณภาพ</p>
            <div className="flex flex-wrap items-center gap-6 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-slate-400" />
                <span>081-234-5678</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-slate-400" />
                <span>@jjcomputer</span>
              </div>
              <div className="flex items-center gap-2">
                <Facebook className="w-4 h-4 text-[#1877F2]" />
                <span>JJ Computer</span>
              </div>
            </div>
          </div>
        </div>
        <button className="flex items-center justify-center gap-2 px-5 py-2.5 border border-slate-200 text-slate-700 rounded-xl hover:bg-slate-50 transition-colors text-sm font-medium shrink-0">
          <Heart className="w-4 h-4" />
          บันทึกร้านนี้
        </button>
      </div>

      {/* Filter Row */}
      <div className="flex flex-wrap gap-4 items-center justify-between mb-3">
        <div className="flex flex-wrap items-center gap-3 flex-1">
          <div className="relative w-[240px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input type="text" placeholder="ค้นหาสินค้า..." className="w-full border border-slate-200 rounded-xl pl-9 pr-3 py-2.5 text-sm outline-none focus:border-blue-500 bg-white" />
          </div>
          
          <select 
            value={selectedCategory}
            onChange={e => setSelectedCategory(e.target.value)}
            className="border border-slate-200 rounded-xl px-4 py-2.5 text-sm bg-white outline-none w-44 appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%24%2024%22%20fill%3D%22none%22%20stroke%3D%22%2364748b%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:right_0.75rem_center] bg-[length:1em_1em] pr-10"
          >
            <option value="All">หมวดหมู่ทั้งหมด</option>
            <option value="CPU">CPU</option>
            <option value="Mainboard">Mainboard</option>
            <option value="VGA">VGA</option>
            <option value="RAM">RAM</option>
            <option value="Storage">Storage</option>
            <option value="Case">Case</option>
            <option value="PSU">PSU</option>
          </select>
          
          <select className="border border-slate-200 rounded-xl px-4 py-2.5 text-sm bg-white outline-none w-40 appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%24%2024%22%20fill%3D%22none%22%20stroke%3D%22%2364748b%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:right_0.75rem_center] bg-[length:1em_1em] pr-10">
            <option>สถานะ: ทั้งหมด</option>
            <option>พร้อมขาย</option>
            <option>หมดสต๊อก</option>
          </select>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-sm text-slate-500">เรียงตาม</span>
          <select className="border border-slate-200 rounded-xl px-4 py-2.5 text-sm bg-white outline-none w-48 appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%24%2024%22%20fill%3D%22none%22%20stroke%3D%22%2364748b%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:right_0.75rem_center] bg-[length:1em_1em] pr-10">
            <option>ชื่อสินค้า: A - Z</option>
            <option>ชื่อสินค้า: Z - A</option>
            <option>ราคา: ต่ำ - สูง</option>
            <option>ราคา: สูง - ต่ำ</option>
          </select>
        </div>
      </div>

      <div className="bg-white/60 backdrop-blur-lg border border-white rounded-3xl flex-1 flex flex-col min-h-0 shadow-xl">
        {/* Table */}
        <div className="flex-1 overflow-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-white/70 backdrop-blur-md text-slate-400 text-[11px] uppercase tracking-wider font-bold border-b border-white sticky top-0">
              <tr>
                <th className="px-6 py-4 w-[45%]">สินค้า</th>
                <th className="px-6 py-4">หมวดหมู่</th>
                <th className="px-6 py-4 text-right">ราคา (บาท)</th>
                <th className="px-6 py-4 text-center">สถานะ</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredProducts.map(p => (
                <tr key={p.id} className="hover:bg-white/50 transition-colors">
                  <td className="px-6 py-4 font-bold text-slate-800">{p.name}</td>
                  <td className="px-6 py-4 text-slate-500">{p.cat}</td>
                  <td className="px-6 py-4 text-blue-600 font-bold font-mono text-right">{p.price}</td>
                   <td className="px-6 py-4 text-center">
                    <span className={`inline-flex items-center px-2 py-1.5 rounded-xl text-xs font-medium ${
                      p.status === 'พร้อมขาย' ? 'bg-green-50 text-green-700' : 'bg-orange-50 text-orange-700'
                    }`}>
                      <span className={`w-1.5 h-1.5 rounded-full mr-1.5 ${p.status === 'พร้อมขาย' ? 'bg-green-500' : 'bg-orange-500'}`}></span>
                      {p.status}
                    </span>
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

