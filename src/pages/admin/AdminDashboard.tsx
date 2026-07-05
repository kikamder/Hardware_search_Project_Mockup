import React from 'react';
import { Users, Store, Bookmark, Search, UserPlus, Store as StoreIcon, Box, BarChart2 } from 'lucide-react';

export default function AdminDashboard() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-6 flex justify-between items-start">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Dashboard</h1>
          <p className="text-slate-500 text-sm mt-1">ภาพรวมการใช้งานของแพลตฟอร์ม PC FINDER</p>
        </div>
        <button className="bg-white border border-slate-200 text-slate-700 px-4 py-2 rounded-lg text-sm font-medium flex items-center shadow-sm">
          📅 21 มิถุนายน 2567 - 21 มิถุนายน 2567
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
        </button>
      </div>

      {/* Main Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <div className="bg-white/60 backdrop-blur-lg border border-white rounded-3xl p-6 shadow-xl relative overflow-hidden">
          <div className="flex justify-between items-start mb-4">
            <div className="w-14 h-14 rounded-2xl bg-white/50 text-blue-600 flex items-center justify-center border border-white shadow-sm">
              <Users className="w-6 h-6" />
            </div>
            <div className="text-right">
              <div className="text-sm font-bold text-slate-700 mb-1">ผู้ใช้งานทั้งหมด</div>
              <div className="text-3xl font-bold text-blue-600">12,450</div>
              <div className="text-sm text-slate-500">คน</div>
            </div>
          </div>
          <div className="text-xs text-green-500 font-medium">▲ 8.4% จากเดือนที่แล้ว</div>
          <svg className="absolute bottom-0 left-0 w-full h-8 text-blue-100 fill-current opacity-50" viewBox="0 0 100 100" preserveAspectRatio="none"><path d="M0,100 L0,50 Q25,75 50,50 T100,50 L100,100 Z" /></svg>
          <svg className="absolute bottom-0 left-0 w-full h-8 text-blue-500 fill-none stroke-current" strokeWidth="2" viewBox="0 0 100 100" preserveAspectRatio="none"><path d="M0,50 Q25,75 50,50 T100,50" /></svg>
        </div>
        
        <div className="bg-white/60 backdrop-blur-lg border border-white rounded-3xl p-6 shadow-xl relative overflow-hidden">
          <div className="flex justify-between items-start mb-4">
            <div className="w-14 h-14 rounded-2xl bg-white/50 text-green-600 flex items-center justify-center border border-white shadow-sm">
              <Store className="w-6 h-6" />
            </div>
            <div className="text-right">
              <div className="text-sm font-bold text-slate-700 mb-1">ร้านค้าทั้งหมด</div>
              <div className="text-3xl font-bold text-slate-800">1,248</div>
              <div className="text-sm text-slate-500">ร้าน</div>
            </div>
          </div>
          <div className="text-xs text-green-500 font-medium">▲ 6.2% จากเดือนที่แล้ว</div>
          <svg className="absolute bottom-0 left-0 w-full h-8 text-green-500 fill-none stroke-current" strokeWidth="2" viewBox="0 0 100 100" preserveAspectRatio="none"><path d="M0,60 Q25,40 50,60 T100,60" /></svg>
        </div>

        <div className="bg-white/60 backdrop-blur-lg border border-white rounded-3xl p-6 shadow-xl relative overflow-hidden">
          <div className="flex justify-between items-start mb-4">
            <div className="w-14 h-14 rounded-2xl bg-white/50 text-purple-600 flex items-center justify-center border border-white shadow-sm">
              <Bookmark className="w-6 h-6" />
            </div>
            <div className="text-right">
              <div className="text-sm font-bold text-slate-700 mb-1">สเปคที่บันทึกทั้งหมด</div>
              <div className="text-3xl font-bold text-slate-800">8,620</div>
              <div className="text-sm text-slate-500">รายการ</div>
            </div>
          </div>
          <div className="text-xs text-green-500 font-medium">▲ 15.7% จากเดือนที่แล้ว</div>
          <svg className="absolute bottom-0 left-0 w-full h-8 text-purple-500 fill-none stroke-current" strokeWidth="2" viewBox="0 0 100 100" preserveAspectRatio="none"><path d="M0,70 Q25,30 50,70 T100,70" /></svg>
        </div>

        <div className="bg-white/60 backdrop-blur-lg border border-white rounded-3xl p-6 shadow-xl relative overflow-hidden">
          <div className="flex justify-between items-start mb-4">
            <div className="w-14 h-14 rounded-2xl bg-white/50 text-orange-500 flex items-center justify-center border border-white shadow-sm">
              <Search className="w-6 h-6" />
            </div>
            <div className="text-right">
              <div className="text-sm font-bold text-slate-700 mb-1">การค้นหาทั้งหมด</div>
              <div className="text-3xl font-bold text-slate-800">45,231</div>
              <div className="text-sm text-slate-500">ครั้ง</div>
            </div>
          </div>
          <div className="text-xs text-green-500 font-medium">▲ 12.3% จากเดือนที่แล้ว</div>
          <svg className="absolute bottom-0 left-0 w-full h-8 text-orange-500 fill-none stroke-current" strokeWidth="2" viewBox="0 0 100 100" preserveAspectRatio="none"><path d="M0,40 Q25,80 50,40 T100,40" /></svg>
        </div>
      </div>

      {/* Secondary Stats */}
      <div className="mb-6">
        <h2 className="text-sm font-bold text-slate-700 mb-3">สถิติโดยรวมของระบบ</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white/60 backdrop-blur-lg border border-white rounded-2xl p-4 flex items-center shadow-md">
            <div className="w-12 h-12 rounded-2xl bg-white/50 text-blue-500 flex items-center justify-center mr-4 border border-white shadow-sm">
              <UserPlus className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-slate-500 font-bold mb-0.5">ผู้ใช้ใหม่ (เดือนนี้)</div>
              <div className="text-lg font-bold text-slate-800">1,125 <span className="text-xs font-normal text-slate-500">คน</span></div>
              <div className="text-[10px] text-green-500 font-medium">▲ 9.6%</div>
            </div>
          </div>
          <div className="bg-white/60 backdrop-blur-lg border border-white rounded-2xl p-4 flex items-center shadow-md">
            <div className="w-12 h-12 rounded-2xl bg-white/50 text-green-500 flex items-center justify-center mr-4 border border-white shadow-sm">
              <StoreIcon className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-slate-500 font-bold mb-0.5">ร้านค้าใหม่ (เดือนนี้)</div>
              <div className="text-lg font-bold text-slate-800">28 <span className="text-xs font-normal text-slate-500">ร้าน</span></div>
              <div className="text-[10px] text-green-500 font-medium">▲ 7.1%</div>
            </div>
          </div>
          <div className="bg-white/60 backdrop-blur-lg border border-white rounded-2xl p-4 flex items-center shadow-md">
            <div className="w-12 h-12 rounded-2xl bg-white/50 text-purple-500 flex items-center justify-center mr-4 border border-white shadow-sm">
              <Box className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-slate-500 font-bold mb-0.5">สินค้าทั้งหมดในระบบ</div>
              <div className="text-lg font-bold text-slate-800">78,620 <span className="text-xs font-normal text-slate-500">รายการ</span></div>
              <div className="text-[10px] text-green-500 font-medium">▲ 6.8%</div>
            </div>
          </div>
          <div className="bg-white/60 backdrop-blur-lg border border-white rounded-2xl p-4 flex items-center shadow-md">
            <div className="w-12 h-12 rounded-2xl bg-white/50 text-orange-500 flex items-center justify-center mr-4 border border-white shadow-sm">
              <BarChart2 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-slate-500 font-bold mb-0.5">สเปคที่ค้นหามากที่สุด (วันนี้)</div>
              <div className="text-lg font-bold text-slate-800">1,320 <span className="text-xs font-normal text-slate-500">ครั้ง</span></div>
              <div className="text-[10px] text-green-500 font-medium">▲ 11.3%</div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-6">
        {/* Pie Chart */}
        <div className="lg:col-span-2 bg-white/60 backdrop-blur-lg border border-white rounded-3xl p-6 shadow-xl flex flex-col">
          <h2 className="font-bold text-slate-800 mb-6">สัดส่วนอุปกรณ์ในระบบ</h2>
          <div className="flex-1 flex flex-col items-center justify-center">
            {/* Fake Pie Chart */}
            <div className="relative w-48 h-48 rounded-full mb-8" style={{ background: 'conic-gradient(#3b82f6 0% 36%, #a855f7 36% 56%, #10b981 56% 72%, #f59e0b 72% 86%, #ef4444 86% 95%, #64748b 95% 100%)' }}>
              <div className="absolute inset-0 m-auto w-32 h-32 bg-white rounded-full flex flex-col items-center justify-center">
                <span className="text-xl font-bold text-slate-800">78,620</span>
                <span className="text-xs text-slate-500">รายการ</span>
              </div>
            </div>
            
            <div className="w-full grid grid-cols-2 gap-y-2 gap-x-4 text-xs text-slate-600">
              <div className="flex justify-between"><span className="flex items-center"><span className="w-2 h-2 rounded-full bg-blue-500 mr-2"></span>VGA</span> <span>28,450 <span className="text-slate-400">(36.2%)</span></span></div>
              <div className="flex justify-between"><span className="flex items-center"><span className="w-2 h-2 rounded-full bg-purple-500 mr-2"></span>CPU</span> <span>16,230 <span className="text-slate-400">(20.6%)</span></span></div>
              <div className="flex justify-between"><span className="flex items-center"><span className="w-2 h-2 rounded-full bg-emerald-500 mr-2"></span>RAM</span> <span>12,850 <span className="text-slate-400">(16.4%)</span></span></div>
              <div className="flex justify-between"><span className="flex items-center"><span className="w-2 h-2 rounded-full bg-amber-500 mr-2"></span>STORAGE</span> <span>11,280 <span className="text-slate-400">(14.3%)</span></span></div>
              <div className="flex justify-between"><span className="flex items-center"><span className="w-2 h-2 rounded-full bg-red-500 mr-2"></span>MAINBOARD</span> <span>6,980 <span className="text-slate-400">(8.9%)</span></span></div>
              <div className="flex justify-between"><span className="flex items-center"><span className="w-2 h-2 rounded-full bg-slate-500 mr-2"></span>PSU</span> <span>2,830 <span className="text-slate-400">(3.6%)</span></span></div>
            </div>
          </div>
        </div>

        {/* Bar Chart */}
        <div className="lg:col-span-3 bg-white/60 backdrop-blur-lg border border-white rounded-3xl p-6 shadow-xl flex flex-col">
          <h2 className="font-bold text-slate-800 mb-6">อุปกรณ์ที่ผู้ใช้ค้นหามากที่สุด</h2>
          <div className="flex-1 flex flex-col justify-between">
            <div className="flex items-center text-sm"><div className="w-20 text-right mr-4 text-slate-600 font-bold">VGA</div><div className="flex-1 bg-slate-100 rounded-full h-4"><div className="bg-blue-500 h-4 rounded-full w-[90%]"></div></div><div className="w-16 ml-2 text-slate-600 text-xs">18,250</div></div>
            <div className="flex items-center text-sm"><div className="w-20 text-right mr-4 text-slate-600 font-bold">CPU</div><div className="flex-1 bg-slate-100 rounded-full h-4"><div className="bg-purple-500 h-4 rounded-full w-[70%]"></div></div><div className="w-16 ml-2 text-slate-600 text-xs">14,320</div></div>
            <div className="flex items-center text-sm"><div className="w-20 text-right mr-4 text-slate-600 font-bold">RAM</div><div className="flex-1 bg-slate-100 rounded-full h-4"><div className="bg-emerald-500 h-4 rounded-full w-[50%]"></div></div><div className="w-16 ml-2 text-slate-600 text-xs">9,850</div></div>
            <div className="flex items-center text-sm"><div className="w-20 text-right mr-4 text-slate-600 font-bold">STORAGE</div><div className="flex-1 bg-slate-100 rounded-full h-4"><div className="bg-amber-500 h-4 rounded-full w-[40%]"></div></div><div className="w-16 ml-2 text-slate-600 text-xs">7,950</div></div>
            <div className="flex items-center text-sm"><div className="w-20 text-right mr-4 text-slate-600 font-bold">MAINBOARD</div><div className="flex-1 bg-slate-100 rounded-full h-4"><div className="bg-orange-500 h-4 rounded-full w-[30%]"></div></div><div className="w-16 ml-2 text-slate-600 text-xs">5,680</div></div>
            <div className="flex items-center text-sm"><div className="w-20 text-right mr-4 text-slate-600 font-bold">PSU</div><div className="flex-1 bg-slate-100 rounded-full h-4"><div className="bg-cyan-500 h-4 rounded-full w-[15%]"></div></div><div className="w-16 ml-2 text-slate-600 text-xs">3,250</div></div>
            
            <div className="flex justify-between text-xs text-slate-400 mt-4 pl-24 pr-16 border-t border-slate-100 pt-2">
              <span>0</span><span>5K</span><span>10K</span><span>15K</span><span>20K</span>
            </div>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white/60 backdrop-blur-lg border border-white rounded-3xl p-6 shadow-xl">
        <h2 className="font-bold text-slate-800 mb-4">ร้านค้าที่ถูกบันทึกมากที่สุด</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-slate-500 border-b border-slate-100">
              <tr>
                <th className="pb-2 font-medium w-12">#</th>
                <th className="pb-2 font-medium">ชื่อร้านค้า</th>
                <th className="pb-2 font-medium text-center">จำนวนการบันทึก</th>
                <th className="pb-2 font-medium text-center">เพิ่มขึ้นจากเดือนที่แล้ว</th>
                <th className="pb-2 font-medium">จังหวัด</th>
                <th className="pb-2 font-medium text-center">เรตติ้งเฉลี่ย</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              <tr>
                <td className="py-3 text-slate-400">1</td>
                <td className="py-3 font-medium text-slate-800">JIB Online</td>
                <td className="py-3 text-center text-slate-600">2,450</td>
                <td className="py-3 text-center text-green-500 text-xs font-medium">▲ 18.6%</td>
                <td className="py-3 text-slate-600">กรุงเทพมหานคร</td>
                <td className="py-3 text-center font-bold text-slate-700">4.8 <span className="text-orange-400">★</span></td>
              </tr>
              <tr>
                <td className="py-3 text-slate-400">2</td>
                <td className="py-3 font-medium text-slate-800">Advice Online</td>
                <td className="py-3 text-center text-slate-600">1,975</td>
                <td className="py-3 text-center text-green-500 text-xs font-medium">▲ 12.4%</td>
                <td className="py-3 text-slate-600">กรุงเทพมหานคร</td>
                <td className="py-3 text-center font-bold text-slate-700">4.7 <span className="text-orange-400">★</span></td>
              </tr>
              <tr>
                <td className="py-3 text-slate-400">3</td>
                <td className="py-3 font-medium text-slate-800">IT City</td>
                <td className="py-3 text-center text-slate-600">1,520</td>
                <td className="py-3 text-center text-green-500 text-xs font-medium">▲ 9.3%</td>
                <td className="py-3 text-slate-600">กรุงเทพมหานคร</td>
                <td className="py-3 text-center font-bold text-slate-700">4.6 <span className="text-orange-400">★</span></td>
              </tr>
              <tr>
                <td className="py-3 text-slate-400">4</td>
                <td className="py-3 font-medium text-slate-800">ComSpec Pro</td>
                <td className="py-3 text-center text-slate-600">1,210</td>
                <td className="py-3 text-center text-green-500 text-xs font-medium">▲ 8.1%</td>
                <td className="py-3 text-slate-600">กรุงเทพมหานคร</td>
                <td className="py-3 text-center font-bold text-slate-700">4.6 <span className="text-orange-400">★</span></td>
              </tr>
              <tr>
                <td className="py-3 text-slate-400">5</td>
                <td className="py-3 font-medium text-slate-800">BaNANA IT</td>
                <td className="py-3 text-center text-slate-600">980</td>
                <td className="py-3 text-center text-green-500 text-xs font-medium">▲ 6.7%</td>
                <td className="py-3 text-slate-600">กรุงเทพมหานคร</td>
                <td className="py-3 text-center font-bold text-slate-700">4.5 <span className="text-orange-400">★</span></td>
              </tr>
            </tbody>
          </table>
        </div>
        <button className="w-full text-blue-600 text-sm font-bold mt-4 py-2 hover:bg-blue-50 rounded-lg">ดูร้านค้าทั้งหมด {'>'}</button>
      </div>
    </div>
  );
}
