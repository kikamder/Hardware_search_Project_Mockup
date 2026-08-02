import React from 'react';
import { Folder, Heart, Info } from 'lucide-react';

export default function StoreDashboard() {
  const hotItems = [
    { id: 1, cat: 'VGA', name: 'RTX 4060 Ti 8GB GDDR6', searches: 183 },
    { id: 2, cat: 'CPU', name: 'Ryzen 5 7600X', searches: 167 },
    { id: 3, cat: 'RAM', name: 'DDR5-6000 32GB (2x16GB)', searches: 142 },
    { id: 4, cat: 'STORAGE', name: 'Samsung 990 Pro 2TB NVMe', searches: 119 },
    { id: 5, cat: 'MAINBOARD', name: 'B650E AORUS Master DDR5', searches: 98 },
    { id: 6, cat: 'PSU', name: 'Corsair RM850x 80+ Gold', searches: 62 },
  ];

  const gapAnalysis = [
    { id: 1, name: 'RTX 4070 Super 12GB', people: 94 },
    { id: 2, name: 'Core i9-14900K', people: 71 },
    { id: 3, name: 'Noctua NH-D15 Cooler', people: 38 },
    { id: 4, name: 'Lian Li O11D EVO Case', people: 29 },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-blue-600 flex items-center">
          ยินดีต้อนรับ, JJ Computer 👋
        </h1>
        <p className="text-slate-500 text-sm mt-1">ภาพรวมร้านค้าของคุณ</p>
        <p className="text-xs text-slate-400">อัปเดตล่าสุด 2 ชม. ที่แล้ว</p>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-6 border border-white flex items-center shadow-xl">
          <div className="w-14 h-14 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mr-5 shrink-0 shadow-sm border border-white">
            <Folder className="w-6 h-6 fill-blue-600 text-blue-600" />
          </div>
          <div>
            <div className="text-sm text-slate-800 font-bold mb-1">จำนวนสินค้าทั้งหมด</div>
            <div className="text-2xl font-bold text-slate-800">314 <span className="text-sm font-normal text-slate-500">รายการ</span></div>
            <div className="text-xs text-green-500 font-medium mt-1">↑ 8.4% จากเดือนที่แล้ว</div>
          </div>
        </div>
        
        <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-6 border border-white flex items-center shadow-xl">
          <div className="w-14 h-14 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center mr-5 shrink-0 shadow-sm border border-white">
            <Heart className="w-6 h-6 fill-purple-600 text-purple-600" />
          </div>
          <div>
            <div className="text-sm text-slate-800 font-bold mb-1">ร้านค้าที่ถูกบันทึก</div>
            <div className="text-2xl font-bold text-slate-800">254 <span className="text-sm font-normal text-slate-500">รายการ</span></div>
            <div className="text-xs text-green-500 font-medium mt-1">↑ 12.6% จากเดือนที่แล้ว</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Hot Items */}
        <div className="bg-white/60 backdrop-blur-lg border border-white rounded-3xl p-6 shadow-xl flex flex-col">
          <h3 className="font-bold text-slate-800 mb-4">สินค้าที่มีคนสนใจมากที่สุด แยกตามหมวดหมู่</h3>
          <div className="overflow-x-auto flex-1">
            <table className="w-full text-sm text-left">
              <thead className="text-slate-500 border-b border-slate-100">
                <tr>
                  <th className="pb-3 font-medium w-12">#</th>
                  <th className="pb-3 font-medium w-32">หมวดหมู่</th>
                  <th className="pb-3 font-medium">สินค้า</th>
                  <th className="pb-3 font-medium text-right">จำนวนการค้นหา</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {hotItems.map((item, idx) => (
                  <tr key={item.id}>
                    <td className="py-4 font-bold text-slate-800">{idx + 1}</td>
                    <td className="py-4 text-slate-500">{item.cat}</td>
                    <td className="py-4 font-medium text-slate-700">{item.name}</td>
                    <td className="py-4 text-right text-slate-800">{item.searches}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <button className="w-full text-blue-600 text-sm font-bold mt-4 py-3 hover:bg-blue-50/50 transition-colors rounded-xl">ดูทั้งหมด</button>
        </div>

        {/* Gap Analysis */}
        <div className="bg-white/60 backdrop-blur-lg border border-white rounded-3xl p-6 shadow-xl flex flex-col">
          <h3 className="font-bold text-slate-800 mb-4">สินค้าที่ลูกค้าบันทึก แต่ร้านค้ายังไม่มี</h3>
          <div className="space-y-4 flex-1 mt-2">
            {gapAnalysis.map(item => (
              <div key={item.id} className="flex justify-between items-center pb-5 border-b border-slate-100 last:border-0 last:pb-0">
                <div>
                  <div className="font-bold text-slate-800 mb-1">{item.name}</div>
                  <div className="text-sm text-slate-500">{item.people} คนกำลังหาสินค้านี้</div>
                </div>
                <button className="bg-[#fef08a] hover:bg-[#fde047] text-slate-800 px-4 py-2 rounded-xl text-sm font-medium flex items-center transition-colors">
                  + เพิ่มเข้าร้าน ↗
                </button>
              </div>
            ))}
          </div>
          <button className="w-full text-blue-600 text-sm font-bold mt-4 py-3 hover:bg-blue-50/50 transition-colors rounded-xl">ดูทั้งหมด</button>
        </div>
      </div>

      {/* Info Notice */}
      <div className="bg-white/60 backdrop-blur-lg border border-white rounded-3xl p-6 shadow-xl flex gap-4 mt-2">
        <Info className="w-6 h-6 text-blue-500 shrink-0" />
        <div>
          <h4 className="text-blue-600 font-bold mb-1">หมายเหตุ</h4>
          <p className="text-blue-600/80 text-sm">ราคาและสต็อกสินค้าอาจมีการเปลี่ยนแปลง กรุณาตรวจสอบที่หน้าร้านค้าก่อนทำการสั่งซื้อ</p>
        </div>
      </div>
    </div>
  );
}
