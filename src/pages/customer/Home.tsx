import React from 'react';
import { useAppContext } from '../../AppContext';
import { WIREFRAME_IMAGE } from '../../data';
import { Search } from 'lucide-react';

export default function Home() {
  const { navigate, setSelectedCategory } = useAppContext();

  const categories = [
    { id: 'CPU', name: 'CPU', img: WIREFRAME_IMAGE },
    { id: 'VGA', name: 'VGA', img: WIREFRAME_IMAGE },
    { id: 'RAM', name: 'RAM', img: WIREFRAME_IMAGE },
    { id: 'MAINBOARD', name: 'MAINBORD', img: WIREFRAME_IMAGE },
    { id: 'STORAGE', name: 'STORAGE', img: WIREFRAME_IMAGE },
  ];

  const handleSelectCategory = (catId: string) => {
    setSelectedCategory(catId);
    navigate('CUSTOMER_SELECT_HARDWARE');
  };

  return (
    <div className="max-w-6xl mx-auto">
      {/* Banner */}
      <div className="bg-white/60 backdrop-blur-lg border border-white rounded-3xl shadow-xl p-10 mb-10 flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
        <div className="z-10 w-full md:w-1/2">
          <h1 className="text-4xl font-bold text-slate-800 mb-2">ค้นหาร้านขาย<br/><span className="text-blue-600">อุปกรณ์คอมพิวเตอร์</span></h1>
          <p className="text-slate-600 mb-6">ค้นหาและเปรียบเทียบราคาจากร้านค้า</p>
          
          <div className="flex bg-white/80 backdrop-blur-md rounded-full shadow-sm overflow-hidden border border-white">
            <div className="flex items-center pl-6">
              <Search className="w-5 h-5 text-slate-400" />
            </div>
            <input 
              type="text" 
              placeholder="ค้นหาอุปกรณ์" 
              className="flex-1 py-3 px-4 outline-none bg-transparent"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 rounded-full m-1 font-medium transition-colors">
              ค้นหา
            </button>
          </div>
        </div>
        <div className="mt-8 md:mt-0 w-full md:w-1/2 flex justify-end relative z-10">
          <img src={WIREFRAME_IMAGE} alt="Banner" className="w-full max-w-md rounded-2xl object-cover h-48 border border-white shadow-md" />
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-100/30 to-transparent pointer-events-none"></div>
      </div>

      {/* Categories */}
      <div>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-slate-800">เลือกหมวดหมู่อุปกรณ์</h2>
          <button className="text-blue-600 font-bold hover:underline">ดูทั้งหมด {'>'}</button>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map((cat) => (
            <div 
              key={cat.id} 
              onClick={() => handleSelectCategory(cat.id)}
              className="bg-white/60 backdrop-blur-lg rounded-3xl shadow-lg border border-white p-4 flex flex-col items-center justify-center cursor-pointer hover:bg-white/90 transition-all h-40"
            >
              <div className="w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center mb-3 p-2">
                <img src={cat.img} alt={cat.name} className="w-full h-full object-contain rounded-full" />
              </div>
              <span className="font-bold text-slate-700 text-sm">{cat.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
