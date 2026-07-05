import React from 'react';
import { Folder, MoreVertical, Plus, Grid, List } from 'lucide-react';

export default function DeviceFolders() {
  const folders = [
    { id: 1, name: 'คอมทำงาน 2024', items: 5, date: '12 พ.ค. 2567' },
    { id: 2, name: 'คอมเล่นเกม RTX 4070', items: 8, date: '10 พ.ค. 2567' },
    { id: 3, name: 'ชุดสตรีมมิ่ง', items: 6, date: '8 พ.ค. 2567' },
    { id: 4, name: 'คอมงบ 30,000', items: 4, date: '5 พ.ค. 2567' },
    { id: 5, name: 'อัปเกรดเครื่องเก่า', items: 3, date: '3 พ.ค. 2567' },
  ];

  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-blue-600 mb-1">แฟ้มอุปกรณ์</h1>
          <p className="text-slate-500 text-sm">จัดเก็บชุดอุปกรณ์ที่คุณบันทึกไว้ในแฟ้มต่างๆ เพื่อความสะดวกในการใช้งาน</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-2xl px-6 py-3 flex items-center transition-all shadow-lg shadow-blue-200">
          <Folder className="w-5 h-5 mr-2" />
          สร้างแฟ้มใหม่
        </button>
      </div>
      
      <div className="flex justify-between items-center mb-6">
        <span className="font-medium text-slate-700">ทั้งหมด 5 แฟ้ม</span>
        <div className="flex items-center gap-3">
          <div className="relative">
            <input 
              type="text" 
              placeholder="ค้นหาแฟ้ม..." 
              className="border border-slate-200 rounded-lg pl-3 pr-8 py-2 text-sm w-48 outline-none"
            />
          </div>
          <select className="border border-slate-200 rounded-lg px-3 py-2 text-sm bg-white outline-none">
            <option>เรียงตามล่าสุด</option>
          </select>
          <div className="flex bg-white/60 backdrop-blur-md border border-white rounded-xl overflow-hidden shadow-sm">
            <button className="p-2.5 bg-white/80 text-blue-600">
              <Grid className="w-4 h-4" />
            </button>
            <button className="p-2.5 hover:bg-white/40 text-slate-400">
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {folders.map(folder => (
          <div key={folder.id} className="bg-white/60 backdrop-blur-lg border border-white rounded-3xl p-6 flex flex-col items-center relative group cursor-pointer hover:bg-white/80 shadow-xl transition-all">
            <button className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-1">
              <MoreVertical className="w-5 h-5" />
            </button>
            <Folder className="w-24 h-24 text-blue-400 mb-4 fill-current opacity-80" />
            <h3 className="font-bold text-slate-800 text-lg mb-1 w-full text-left">{folder.name}</h3>
            <p className="text-sm text-slate-500 w-full text-left mb-1">อุปกรณ์ {folder.items} รายการ</p>
            <p className="text-xs text-slate-400 w-full text-left">อัปเดตล่าสุด {folder.date}</p>
          </div>
        ))}
        
        <div className="bg-blue-50/40 backdrop-blur-md rounded-3xl border border-white/60 p-6 flex flex-col items-center justify-center cursor-pointer hover:bg-white/50 transition-all min-h-[220px] shadow-sm">
          <Plus className="w-12 h-12 text-blue-500 mb-2" />
          <span className="font-medium text-blue-600">สร้างแฟ้มใหม่</span>
        </div>
      </div>
    </div>
  );
}
