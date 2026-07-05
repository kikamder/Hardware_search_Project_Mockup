import React from 'react';
import { Package, Bookmark, Heart, AlertTriangle } from 'lucide-react';

export default function StoreDashboard() {
  const hotItems = [
    { id: 1, cat: 'VGA', name: 'RTX 4060 Ti 8GB GDDR6', pulls: 183, stock: 2 },
    { id: 2, cat: 'CPU', name: 'Ryzen 5 7600X', pulls: 167, stock: 14 },
    { id: 3, cat: 'RAM', name: 'DDR5-6000 32GB (2x16GB)', pulls: 142, stock: 3 },
    { id: 4, cat: 'STORAGE', name: 'Samsung 990 Pro 2TB NVMe', pulls: 119, stock: 8 },
    { id: 5, cat: 'MB', name: 'B650E AORUS Master DDR5', pulls: '-', stock: '-' },
    { id: 6, cat: 'PSU', name: 'Corsair RM850x 80+ Gold', pulls: '-', stock: '-' },
    { id: 7, cat: 'RAM', name: 'DDR5-6000 32GB (2x16GB)', pulls: '-', stock: '-' },
    { id: 8, cat: 'CPU', name: 'Ryzen 5 7600X', pulls: '-', stock: '-' },
    { id: 9, cat: 'STORAGE', name: 'Samsung 990 Pro 2TB NVMe', pulls: '-', stock: '-' },
    { id: 10, cat: 'VGA', name: 'RTX 4060 Ti 8GB GDDR6', pulls: '-', stock: '-' },
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
                    <td className="py-3 text-right text-slate-700">{item.stock !== '-' ? `เหลือ ${item.stock}` : '-'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <button className="w-full text-blue-600 text-sm font-bold mt-4 py-3 hover:bg-blue-50/50 transition-colors rounded-xl">ดูทั้งหมด</button>
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
                <button className="bg-[#fef08a] hover:bg-[#fde047] text-slate-800 px-4 py-2 rounded-xl text-sm font-medium flex items-center transition-colors">
                  + เพิ่มเข้าร้าน ↗
                </button>
              </div>
            ))}
          </div>
          <button className="w-full text-blue-600 text-sm font-bold mt-4 py-3 hover:bg-blue-50/50 transition-colors rounded-xl">ดูทั้งหมด</button>
        </div>
      </div>

      {/* New bottom row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        {/* Trend & Insights */}
        <div className="bg-white/60 backdrop-blur-lg border border-white rounded-3xl p-6 shadow-xl flex flex-col">
          <div className="flex justify-between items-end mb-2">
            <div>
              <h3 className="font-bold text-slate-800 mb-1">Trend & Insights</h3>
              <div className="text-xs text-slate-500">Spec Pulls รายปี (5 ปีล่าสุด)</div>
            </div>
            <div className="text-sm text-slate-500">8 สัปดาห์ล่าสุด</div>
          </div>
          <div className="flex-1 relative min-h-[220px] flex items-end pt-4 pb-8 px-4 mt-4">
             {/* Chart grid */}
             <div className="absolute inset-0 flex flex-col justify-between py-8 px-8 text-xs text-slate-400">
               <div className="border-b border-slate-200 border-dashed w-full flex items-center"><span className="absolute left-0 w-6 text-right">40</span></div>
               <div className="border-b border-slate-200 border-dashed w-full flex items-center"><span className="absolute left-0 w-6 text-right">30</span></div>
               <div className="border-b border-slate-200 border-dashed w-full flex items-center"><span className="absolute left-0 w-6 text-right">20</span></div>
               <div className="border-b border-slate-200 border-dashed w-full flex items-center"><span className="absolute left-0 w-6 text-right">10</span></div>
               <div className="border-b border-slate-200 border-dashed w-full flex items-center"><span className="absolute left-0 w-6 text-right">0</span></div>
             </div>
             {/* X axis labels */}
             <div className="absolute bottom-2 left-10 right-4 flex justify-between text-xs text-slate-500 px-6">
               <span>2021</span><span>2022</span><span>2023</span><span>2024</span><span>2025</span>
             </div>
             {/* Chart line SVG */}
             <svg className="absolute inset-0 w-full h-full pt-8 pb-8 px-16 pointer-events-none" preserveAspectRatio="none">
               <path d="M 0,110 L 25%,90 L 50%,80 L 75%,40 L 100%,20" fill="none" stroke="#2563eb" strokeWidth="3" />
               <circle cx="0" cy="110" r="4" fill="#2563eb" />
               <circle cx="25%" cy="90" r="4" fill="#2563eb" />
               <circle cx="50%" cy="80" r="4" fill="#2563eb" />
               <circle cx="75%" cy="40" r="4" fill="#2563eb" />
               <circle cx="100%" cy="20" r="4" fill="#2563eb" />
             </svg>
          </div>
          <button className="w-full text-blue-600 text-sm font-bold mt-4 py-3 hover:bg-blue-50/50 transition-colors rounded-xl">ดูรายงานเพิ่มเติม</button>
        </div>

        {/* Category breakdown */}
        <div className="bg-white/60 backdrop-blur-lg border border-white rounded-3xl p-6 shadow-xl flex flex-col">
          <h3 className="font-bold text-slate-800 mb-6">สัดส่วน Category ที่ขายดีที่สุด</h3>
          <div className="flex-1 flex items-center">
            <div className="w-1/2 flex justify-center">
              <div className="relative w-48 h-48 rounded-full shadow-sm" style={{ background: 'conic-gradient(#2563eb 0% 30%, #8b5cf6 30% 52%, #f43f5e 52% 70%, #eab308 70% 85%, #10b981 85% 94%, #cbd5e1 94% 100%)' }}>
                <div className="absolute inset-0 m-auto w-24 h-24 bg-white rounded-full shadow-inner"></div>
              </div>
            </div>
            <div className="w-1/2 flex flex-col justify-center gap-3 text-sm text-slate-600 pl-4">
              <div className="text-xs font-bold text-slate-400 mb-1">ที่ถูกหยิบลง spec</div>
              <div className="flex justify-between items-center"><div className="flex items-center"><span className="w-3 h-3 rounded-full bg-blue-600 mr-3"></span>VGA</div> <span className="font-medium text-slate-800">30%</span></div>
              <div className="flex justify-between items-center"><div className="flex items-center"><span className="w-3 h-3 rounded-full bg-purple-500 mr-3"></span>CPU</div> <span className="font-medium text-slate-800">22%</span></div>
              <div className="flex justify-between items-center"><div className="flex items-center"><span className="w-3 h-3 rounded-full bg-rose-500 mr-3"></span>RAM</div> <span className="font-medium text-slate-800">18%</span></div>
              <div className="flex justify-between items-center"><div className="flex items-center"><span className="w-3 h-3 rounded-full bg-yellow-500 mr-3"></span>Storage</div> <span className="font-medium text-slate-800">15%</span></div>
              <div className="flex justify-between items-center"><div className="flex items-center"><span className="w-3 h-3 rounded-full bg-emerald-500 mr-3"></span>MB</div> <span className="font-medium text-slate-800">9%</span></div>
              <div className="flex justify-between items-center"><div className="flex items-center"><span className="w-3 h-3 rounded-full bg-slate-300 mr-3"></span>อื่นๆ</div> <span className="font-medium text-slate-800">6%</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
