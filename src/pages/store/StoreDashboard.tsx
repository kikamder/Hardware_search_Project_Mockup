import React from 'react';
import { Package, Bookmark, Heart, AlertTriangle } from 'lucide-react';

export default function StoreDashboard() {
  const hotItems = [
    { id: 1, cat: 'VGA', name: 'RTX 4060 Ti 8GB GDDR6', pulls: 183, stock: 2 },
    { id: 2, cat: 'CPU', name: 'Ryzen 5 7600X', pulls: 167, stock: 14 },
    { id: 3, cat: 'RAM', name: 'DDR5-6000 32GB (2x16GB)', pulls: 142, stock: 3 },
    { id: 4, cat: 'STORAGE', name: 'Samsung 990 Pro 2TB NVMe', pulls: 119, stock: 8 },
    { id: 5, cat: 'MB', name: 'B650E AORUS Master DDR5', pulls: '-', stock: '-' },
  ];

  const gapAnalysis = [
    { id: 1, name: 'RTX 4070 Super 12GB', people: 94 },
    { id: 2, name: 'Core i9-14900K', people: 71 },
    { id: 3, name: 'Noctua NH-D15 Cooler', people: 38 },
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-6 border border-white flex items-center shadow-xl">
          <div className="w-14 h-14 rounded-2xl bg-white/50 text-blue-600 flex items-center justify-center mr-5 shrink-0 shadow-sm border border-white">
            <Package className="w-6 h-6" />
          </div>
          <div>
            <div className="text-sm text-slate-500 font-medium">จำนวนสินค้าในร้านทั้งหมด</div>
            <div className="text-2xl font-bold text-slate-800">314 <span className="text-sm font-normal text-slate-500">รายการ</span></div>
            <div className="text-xs text-green-500 font-medium mt-1">↑ 8.4% จากเดือนที่แล้ว</div>
          </div>
        </div>
        <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-6 border border-white flex items-center shadow-xl">
          <div className="w-14 h-14 rounded-2xl bg-white/50 text-green-600 flex items-center justify-center mr-5 shrink-0 shadow-sm border border-white">
            <Bookmark className="w-6 h-6" />
          </div>
          <div>
            <div className="text-sm text-slate-500 font-medium">สินค้าที่ถูกบันทึก</div>
            <div className="text-2xl font-bold text-slate-800">254 <span className="text-sm font-normal text-slate-500">รายการ</span></div>
            <div className="text-xs text-green-500 font-medium mt-1">↑ 12.6% จากเดือนที่แล้ว</div>
          </div>
        </div>
        <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-6 border border-white flex items-center shadow-xl">
          <div className="w-14 h-14 rounded-2xl bg-white/50 text-purple-600 flex items-center justify-center mr-5 shrink-0 shadow-sm border border-white">
            <Heart className="w-6 h-6" />
          </div>
          <div>
            <div className="text-sm text-slate-500 font-medium">ร้านค้าที่ถูกบันทึก</div>
            <div className="text-2xl font-bold text-slate-800">14 <span className="text-sm font-normal text-slate-500">ร้าน</span></div>
            <div className="text-xs text-green-500 font-medium mt-1">↑ 24% จากเดือนที่แล้ว</div>
          </div>
        </div>
        <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-6 border border-white flex items-center shadow-xl">
          <div className="w-14 h-14 rounded-2xl bg-white/50 text-orange-500 flex items-center justify-center mr-5 shrink-0 shadow-sm border border-white">
            <AlertTriangle className="w-6 h-6" />
          </div>
          <div>
            <div className="text-sm text-slate-500 font-medium">สินค้าขาดสต๊อก</div>
            <div className="text-2xl font-bold text-slate-800">148 <span className="text-sm font-normal text-slate-500">รายการ</span></div>
            <div className="text-xs text-orange-500 font-medium mt-1">⚠ 3 รายการใกล้หมดสต๊อก</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Hot Items */}
        <div className="bg-white/60 backdrop-blur-lg border border-white rounded-3xl p-6 shadow-xl flex flex-col">
          <h3 className="font-bold text-slate-800 mb-4">Hot Items — สินค้าที่ถูกหยิบลงสเปคมากที่สุด</h3>
          <div className="overflow-x-auto flex-1">
            <table className="w-full text-sm text-left">
              <thead className="text-slate-500 border-b border-slate-100">
                <tr>
                  <th className="pb-2 font-medium">#</th>
                  <th className="pb-2 font-medium">หมวด</th>
                  <th className="pb-2 font-medium">สินค้า</th>
                  <th className="pb-2 font-medium text-center">Pulls</th>
                  <th className="pb-2 font-medium text-right">สต๊อก</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {hotItems.map((item, idx) => (
                  <tr key={item.id}>
                    <td className="py-3 text-slate-400">{idx + 1}</td>
                    <td className="py-3 text-slate-500">{item.cat}</td>
                    <td className="py-3 font-medium text-slate-700">{item.name}</td>
                    <td className="py-3 text-center text-slate-700">{item.pulls}</td>
                    <td className="py-3 text-right text-slate-500">เหลือ {item.stock}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <button className="w-full text-blue-600 text-sm font-bold mt-4 py-3 hover:bg-white/60 transition-all rounded-2xl shadow-sm border border-transparent hover:border-white">ดูทั้งหมด</button>
        </div>

        {/* Gap Analysis */}
        <div className="bg-white/60 backdrop-blur-lg border border-white rounded-3xl p-6 shadow-xl flex flex-col">
          <h3 className="font-bold text-slate-800 mb-4">Gap Analysis — สินค้าที่ลูกค้าบันทึก แต่ร้านค้ายังไม่มี</h3>
          <div className="space-y-4 flex-1">
            {gapAnalysis.map(item => (
              <div key={item.id} className="flex justify-between items-center pb-4 border-b border-slate-100 last:border-0 last:pb-0">
                <div>
                  <div className="font-bold text-slate-800">{item.name}</div>
                  <div className="text-sm text-slate-500">{item.people} คนกำลังหาสินค้านี้</div>
                </div>
                <button className="bg-white/50 border border-white text-orange-600 hover:bg-white/80 px-4 py-2 rounded-2xl text-sm font-medium flex items-center shadow-sm transition-all">
                  + เพิ่มเข้าร้าน ↗
                </button>
              </div>
            ))}
          </div>
          <button className="w-full text-blue-600 text-sm font-bold mt-4 py-3 hover:bg-white/60 transition-all rounded-2xl shadow-sm border border-transparent hover:border-white">ดูทั้งหมด</button>
        </div>
      </div>
    </div>
  );
}
