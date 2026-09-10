import React, { useState } from 'react';
import { Plus, Search, Edit2, Trash2, RotateCcw } from 'lucide-react';
import AddProductCpuModal from '../../components/AddProductCpuModal';

export default function ProductManagement() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>(['All']);
  const [isAddCpuModalOpen, setIsAddCpuModalOpen] = useState(false);

  const categories = [
    { id: 'All', label: 'All' },
    { id: 'CPU', label: 'CPU' },
    { id: 'Mainboard', label: 'Mainboard' },
    { id: 'VGA', label: 'VGA' },
    { id: 'RAM', label: 'RAM' },
    { id: 'Storage', label: 'Storage' },
    { id: 'Case', label: 'Case' },
    { id: 'PSU', label: 'PSU' },
  ];

  const initialProducts = [
    { id: 1, name: 'Intel Core i7-14700K', cat: 'CPU', brand: 'Intel', price: '14,900',  status: 'พร้อมขาย' },
    { id: 2, name: 'AMD Ryzen 7 7800X3D', cat: 'CPU', brand: 'AMD', price: '15,900',  status: 'หมดสต๊อก' },
    { id: 3, name: 'MSI GeForce RTX 4070 SUPER', cat: 'VGA', brand: 'MSI', price: '24,900', status: 'พร้อมขาย' },
    { id: 4, name: 'ASUS GeForce RTX 4060 Ti', cat: 'VGA', brand: 'ASUS', price: '14,900', status: 'หมดสต๊อก' },
    { id: 5, name: 'Kingston FURY 16GB (8x2) DDR5 5600', cat: 'RAM', brand: 'Kingston', price: '2,900', status: 'พร้อมขาย' },
    { id: 6, name: 'Corsair Vengeance 32GB (16x2) DDR5 6000', cat: 'RAM', brand: 'Corsair', price: '5,990',  status: 'พร้อมขาย' },
    { id: 7, name: 'WD Black SN850X 1TB NVMe', cat: 'STORAGE', brand: 'Western Digital', price: '4,390',  status: 'พร้อมขาย' },
  ];

  const [productList, setProductList] = useState(initialProducts);

  const toggleCategory = (catId: string) => {
    if (catId === 'All') {
      setSelectedCategories(['All']);
      return;
    }

    setSelectedCategories(prev => {
      const filtered = prev.filter(c => c !== 'All');
      if (filtered.includes(catId)) {
        const newSelection = filtered.filter(c => c !== catId);
        return newSelection.length === 0 ? ['All'] : newSelection;
      } else {
        return [...filtered, catId];
      }
    });
  };

  const filteredProducts = productList.filter(p => {
    if (selectedCategories.includes('All')) return true;
    return selectedCategories.includes(p.cat) || (p.cat === 'STORAGE' && selectedCategories.includes('Storage')) || (p.cat === 'MAINBOARD' && selectedCategories.includes('Mainboard'));
  });

  return (
    <div className="max-w-7xl mx-auto h-full flex flex-col">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">จัดการสินค้า Hardware</h1>
          <p className="text-slate-500 text-sm mt-1">เพิ่ม แก้ไข หรือลบสินค้าในร้านของคุณ</p>
        </div>
        <button 
          onClick={() => setIsAddCpuModalOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-2xl px-5 py-2.5 flex items-center transition-all shadow-lg shadow-blue-200 cursor-pointer"
        >
          <Plus className="w-5 h-5 mr-1" />
          เพิ่มสินค้า
        </button>
      </div>

      <div className="flex flex-1 gap-6 min-h-0">
        {/* Sidebar */}
        <div className="w-64 shrink-0 bg-white/60 backdrop-blur-lg border border-white rounded-3xl p-6 shadow-xl flex flex-col">
          <h3 className="font-bold text-slate-800 mb-4">หมวดหมู่สินค้า</h3>
          <div className="space-y-4 flex-1 overflow-y-auto custom-scrollbar pr-2">
            {categories.map(cat => (
              <label key={cat.id} className="flex items-center gap-3 cursor-pointer group">
                <div className="relative flex items-center justify-center">
                  <input 
                    type="checkbox" 
                    className="w-5 h-5 rounded-md border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer peer"
                    checked={selectedCategories.includes(cat.id)}
                    onChange={() => toggleCategory(cat.id)}
                  />
                </div>
                <span className={`text-sm ${selectedCategories.includes(cat.id) ? 'font-bold text-blue-600' : 'text-slate-600 group-hover:text-slate-800'}`}>
                  {cat.label}
                </span>
              </label>
            ))}
          </div>
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
                <span className="text-xs text-slate-500 mb-1">สถานะ</span>
                <select className="border border-slate-200 rounded-lg px-3 py-1.5 text-sm bg-white outline-none w-32">
                  <option>ทั้งหมด</option>
                  <option>พร้อมขาย</option>
                  <option>หมดสต๊อก</option>
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
                  <th className="px-6 py-4 w-[40%]">สินค้า</th>
                  <th className="px-6 py-4">หมวดหมู่</th>
                  <th className="px-6 py-4 text-right">ราคา (บาท)</th>
                  <th className="px-6 py-4 text-center">สถานะ</th>
                  <th className="px-6 py-4 text-center">จัดการ</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredProducts.map(p => (
                  <tr key={p.id} className="hover:bg-white/50 transition-colors">
                    <td className="px-6 py-4"><input type="checkbox" className="rounded border-slate-300" /></td>
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
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-center space-x-2">
                        <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-xl border border-blue-200 transition-colors"><Edit2 className="w-4 h-4" /></button>
                        <button 
                          onClick={() => setProductList(prev => prev.filter(item => item.id !== p.id))}
                          className="p-2 text-red-600 hover:bg-red-50 rounded-xl border border-red-200 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
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
               <span>1-{filteredProducts.length} จาก {filteredProducts.length} รายการ</span>
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

      <AddProductCpuModal 
        isOpen={isAddCpuModalOpen}
        onClose={() => setIsAddCpuModalOpen(false)}
        onSave={(newProduct) => {
          setProductList(prev => [newProduct, ...prev]);
        }}
      />
    </div>
  );
}
