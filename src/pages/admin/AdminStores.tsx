import React, { useState } from 'react';
import { Search, ChevronDown, Calendar, Store, CheckCircle2, XCircle, UserPlus, Eye, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import StoreDetailsModal from '../../components/StoreDetailsModal';

export default function AdminStores() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStore, setSelectedStore] = useState<any>(null);

  const stores = [
    { id: '1', name: 'JJ Computer', owner: 'สมชาย ใจดี', email: 'somchai@example.com', phone: '081-234-5678', status: 'อนุมัติแล้ว', date: '20 พ.ค. 2567' },
    { id: '2', name: 'Advice IT', owner: 'กมลวรรณ แสงทอง', email: 'kamonwan@example.com', phone: '082-345-6789', status: 'อนุมัติแล้ว', date: '19 พ.ค. 2567' },
    { id: '3', name: 'Power Buy', owner: 'วีระวัฒน์ พงษ์พิพัฒน์', email: 'weerawat@example.com', phone: '083-111-2222', status: 'รอการอนุมัติ', date: '18 พ.ค. 2567' },
    { id: '4', name: 'Commart Zone', owner: 'ณัฐพล ศรีสุข', email: 'nattapol@example.com', phone: '092-333-4444', status: 'รอการอนุมัติ', date: '18 พ.ค. 2567' },
    { id: '5', name: 'Hardware House', owner: 'ธนพล จันทร์ดี', email: 'tanapol@example.com', phone: '093-555-6666', status: 'อนุมัติแล้ว', date: '17 พ.ค. 2567' },
    { id: '6', name: 'IT City', owner: 'ปิยะดา คำมณี', email: 'piyada@example.com', phone: '094-777-8888', status: 'ไม่อนุมัติ', date: '16 พ.ค. 2567' },
    { id: '7', name: 'Speed Com', owner: 'อรรถพล มากมี', email: 'atthapon@example.com', phone: '095-123-4567', status: 'อนุมัติแล้ว', date: '15 พ.ค. 2567' },
    { id: '8', name: 'Next Gen PC', owner: 'ศุภกร วงศ์วิริยะ', email: 'supakorn@example.com', phone: '096-234-5678', status: 'รอการอนุมัติ', date: '14 พ.ค. 2567' },
    { id: '9', name: 'Tech World', owner: 'วีรภัทร สินทรัพย์', email: 'jirapat@example.com', phone: '097-345-6789', status: 'อนุมัติแล้ว', date: '13 พ.ค. 2567' },
    { id: '10', name: 'PC Solution', owner: 'วรัญญา ใจงาม', email: 'waranya@example.com', phone: '098-456-7890', status: 'ไม่อนุมัติ', date: '12 พ.ค. 2567' },
  ];

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-800">จัดการร้านค้าในระบบ</h1>
        <p className="text-slate-500 mt-1 text-sm">จัดการข้อมูลร้านค้าทั้งหมดในระบบ ตรวจสอบสถานะ อนุมัติ แก้ไข และระงับร้านค้าได้</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex items-center space-x-4">
          <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
            <Store className="w-6 h-6" />
          </div>
          <div>
            <div className="text-sm font-medium text-slate-600">ร้านค้าทั้งหมด</div>
            <div className="text-2xl font-bold text-slate-800 mt-1">132</div>
            <div className="text-xs text-slate-400 mt-0.5">ร้าน</div>
          </div>
        </div>
        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex items-center space-x-4">
          <div className="w-12 h-12 rounded-xl bg-green-50 text-green-600 flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div>
            <div className="text-sm font-medium text-slate-600">อนุมัติแล้ว</div>
            <div className="text-2xl font-bold text-green-600 mt-1">98</div>
            <div className="text-xs text-slate-400 mt-0.5">ร้าน</div>
          </div>
        </div>
        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex items-center space-x-4">
          <div className="w-12 h-12 rounded-xl bg-red-50 text-red-500 flex items-center justify-center shrink-0">
            <XCircle className="w-6 h-6" />
          </div>
          <div>
            <div className="text-sm font-medium text-slate-600">ไม่อนุมัติ</div>
            <div className="text-2xl font-bold text-red-500 mt-1">12</div>
            <div className="text-xs text-slate-400 mt-0.5">ร้าน</div>
          </div>
        </div>
        <div className="bg-orange-50 rounded-2xl p-5 border border-orange-100 shadow-sm flex flex-col justify-between relative">
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-xl bg-white text-orange-500 flex items-center justify-center shrink-0 shadow-sm">
                <UserPlus className="w-6 h-6" />
              </div>
              <div>
                <div className="text-sm font-medium text-slate-700">คำขอเปิดร้านใหม่</div>
                <div className="text-2xl font-bold text-slate-800 mt-1">12</div>
                <div className="text-xs text-slate-500 mt-0.5">คน</div>
              </div>
            </div>
            <div className="bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
              12
            </div>
          </div>
          <button className="flex items-center text-sm text-orange-600 font-medium self-end mt-2 hover:text-orange-700 transition-colors">
            ดูคำขอทั้งหมด
            <ArrowRight className="w-4 h-4 ml-1" />
          </button>
        </div>
      </div>

      {/* Main Content Area - Table */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
        
        {/* Filters */}
        <div className="p-4 border-b border-slate-100 flex flex-col md:flex-row items-center gap-4 bg-slate-50/50">
          <div className="relative flex-1 w-full">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input 
              type="text" 
              placeholder="ค้นหาชื่อร้านค้า, เจ้าของร้าน, อีเมล, เบอร์โทร" 
              className="w-full pl-9 pr-4 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 bg-white"
            />
          </div>
          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="flex items-center space-x-2">
              <span className="text-sm text-slate-600 whitespace-nowrap">สถานะ:</span>
              <div className="relative w-32">
                <select className="w-full pl-3 pr-8 py-2 text-sm border border-slate-200 rounded-lg appearance-none focus:outline-none focus:border-blue-500 bg-white">
                  <option>ทั้งหมด</option>
                </select>
                <ChevronDown className="w-4 h-4 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-slate-600 whitespace-nowrap">วันที่สมัคร:</span>
              <div className="relative w-32">
                <select className="w-full pl-3 pr-8 py-2 text-sm border border-slate-200 rounded-lg appearance-none focus:outline-none focus:border-blue-500 bg-white">
                  <option>ทั้งหมด</option>
                </select>
                <ChevronDown className="w-4 h-4 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="relative w-40">
                <Calendar className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input 
                  type="text" 
                  placeholder="เลือกช่วงวันที่" 
                  className="w-full pl-9 pr-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 bg-white cursor-pointer"
                  readOnly
                />
              </div>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-xs font-medium text-slate-500 uppercase tracking-wider">
                <th className="py-3 px-6 w-16">#</th>
                <th className="py-3 px-6">ชื่อร้านค้า</th>
                <th className="py-3 px-6">เจ้าของร้าน</th>
                <th className="py-3 px-6">อีเมล</th>
                <th className="py-3 px-6">เบอร์โทรศัพท์</th>
                <th className="py-3 px-6">สถานะ</th>
                <th className="py-3 px-6">วันที่สมัคร</th>
                <th className="py-3 px-6 text-center w-24">จัดการ</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {stores.map((store) => (
                <tr key={store.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="py-4 px-6 text-slate-500">{store.id}</td>
                  <td className="py-4 px-6 font-medium text-slate-800 whitespace-nowrap">{store.name}</td>
                  <td className="py-4 px-6 text-slate-600 whitespace-nowrap">{store.owner}</td>
                  <td className="py-4 px-6 text-slate-600">{store.email}</td>
                  <td className="py-4 px-6 text-slate-600 whitespace-nowrap">{store.phone}</td>
                  <td className="py-4 px-6">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium whitespace-nowrap ${
                      store.status === 'อนุมัติแล้ว' ? 'bg-green-100 text-green-700' :
                      store.status === 'รอการอนุมัติ' ? 'bg-orange-100 text-orange-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {store.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-slate-600 whitespace-nowrap">{store.date}</td>
                  <td className="py-4 px-6 text-center">
                    <button 
                      onClick={() => { setSelectedStore(store); setIsModalOpen(true); }}
                      className="text-slate-400 hover:text-blue-600 p-1.5 rounded-md hover:bg-blue-50 transition-colors"
                    >
                      <Eye className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="p-4 border-t border-slate-100 flex items-center justify-between bg-slate-50/50">
          <div className="text-sm text-slate-500">
            แสดง 1 - 10 จาก 132 รายการ
          </div>
          <div className="flex items-center space-x-1">
            <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-100 transition-colors bg-white">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-blue-600 text-white font-medium text-sm transition-colors">
              1
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-100 transition-colors bg-white text-sm font-medium">
              2
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-100 transition-colors bg-white text-sm font-medium">
              3
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-100 transition-colors bg-white text-sm font-medium">
              4
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-100 transition-colors bg-white text-sm font-medium">
              5
            </button>
            <span className="w-8 h-8 flex items-center justify-center text-slate-400">...</span>
            <button className="w-10 h-8 flex items-center justify-center rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-100 transition-colors bg-white text-sm font-medium">
              14
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-100 transition-colors bg-white">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>

      <StoreDetailsModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        store={selectedStore}
      />
    </div>
  );
}
