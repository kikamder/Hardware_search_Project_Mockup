import React, { useState } from 'react';
import { Search, ChevronDown, Calendar, User, UserCheck, Store, ShieldCheck, ChevronLeft, ChevronRight } from 'lucide-react';
import UserManagementModal from '../../components/UserManagementModal';

export default function AdminUsers() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<any>(null);

  const users = [
    { id: '1', name: 'สมชาย ใจดี', userId: 'CUS-00001', email: 'somchai@example.com', phone: '081-234-5678', role: 'ลูกค้า', status: 'ใช้งานอยู่', date: '20 พ.ค. 2567' },
    { id: '2', name: 'กมลวรรณ แสงทอง', userId: 'CUS-00002', email: 'kamonwan@example.com', phone: '082-345-6789', role: 'ลูกค้า', status: 'ใช้งานอยู่', date: '19 พ.ค. 2567' },
    { id: '3', name: 'JJ Computer', userId: 'SHOP-00001', email: 'jjcomputer@example.com', phone: '083-111-2222', role: 'เจ้าของร้าน', status: 'ใช้งานอยู่', date: '18 พ.ค. 2567' },
    { id: '4', name: 'Advice IT', userId: 'SHOP-00002', email: 'adviceit@example.com', phone: '02-123-4567', role: 'เจ้าของร้าน', status: 'ใช้งานอยู่', date: '17 พ.ค. 2567' },
    { id: '5', name: 'Power Buy', userId: 'SHOP-00003', email: 'powerbuy@example.com', phone: '02-987-6543', role: 'เจ้าของร้าน', status: 'รอการอนุมัติ', date: '16 พ.ค. 2567' },
    { id: '6', name: 'Admin One', userId: 'ADM-00001', email: 'admin1@example.com', phone: '090-000-0001', role: 'ผู้ดูแลระบบ', status: 'ใช้งานอยู่', date: '15 พ.ค. 2567' },
    { id: '7', name: 'Admin Two', userId: 'ADM-00002', email: 'admin2@example.com', phone: '090-000-0002', role: 'ผู้ดูแลระบบ', status: 'ใช้งานอยู่', date: '14 พ.ค. 2567' },
  ];

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-800">จัดการผู้ใช้</h1>
        <p className="text-slate-500 mt-1 text-sm">จัดการข้อมูลผู้ใช้ทั้งหมดในระบบ สามารถค้นหา ดูข้อมูล และจัดการสิทธิ์การใช้งานได้</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex items-center space-x-4">
          <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
            <User className="w-6 h-6" />
          </div>
          <div>
            <div className="text-sm font-medium text-slate-600">ผู้ใช้ทั้งหมด</div>
            <div className="text-2xl font-bold text-slate-800 mt-1">1,248</div>
            <div className="text-xs text-slate-400 mt-0.5">ผู้ใช้</div>
          </div>
        </div>
        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex items-center space-x-4">
          <div className="w-12 h-12 rounded-xl bg-green-50 text-green-600 flex items-center justify-center shrink-0">
            <UserCheck className="w-6 h-6" />
          </div>
          <div>
            <div className="text-sm font-medium text-slate-600">ลูกค้า (Customer)</div>
            <div className="text-2xl font-bold text-green-600 mt-1">1,102</div>
            <div className="text-xs text-slate-400 mt-0.5">คน</div>
          </div>
        </div>
        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex items-center space-x-4">
          <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
            <Store className="w-6 h-6" />
          </div>
          <div>
            <div className="text-sm font-medium text-slate-600">เจ้าของร้าน (Shop)</div>
            <div className="text-2xl font-bold text-purple-600 mt-1">132</div>
            <div className="text-xs text-slate-400 mt-0.5">ร้าน</div>
          </div>
        </div>
        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex items-center space-x-4">
          <div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <div className="text-sm font-medium text-slate-600">ผู้ดูแลระบบ (Admin)</div>
            <div className="text-2xl font-bold text-orange-600 mt-1">14</div>
            <div className="text-xs text-slate-400 mt-0.5">คน</div>
          </div>
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
              placeholder="ค้นหาชื่อ, อีเมล, เบอร์โทร..." 
              className="w-full pl-9 pr-4 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 bg-white"
            />
          </div>
          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="flex items-center space-x-2">
              <span className="text-sm text-slate-600 whitespace-nowrap">บทบาทผู้ใช้</span>
              <div className="relative w-32">
                <select className="w-full pl-3 pr-8 py-2 text-sm border border-slate-200 rounded-lg appearance-none focus:outline-none focus:border-blue-500 bg-white">
                  <option>ทั้งหมด</option>
                </select>
                <ChevronDown className="w-4 h-4 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-slate-600 whitespace-nowrap">สถานะ</span>
              <div className="relative w-32">
                <select className="w-full pl-3 pr-8 py-2 text-sm border border-slate-200 rounded-lg appearance-none focus:outline-none focus:border-blue-500 bg-white">
                  <option>ทั้งหมด</option>
                </select>
                <ChevronDown className="w-4 h-4 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-slate-600 whitespace-nowrap">วันที่สมัคร</span>
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
                <th className="py-3 px-6">ผู้ใช้</th>
                <th className="py-3 px-6">อีเมล</th>
                <th className="py-3 px-6">เบอร์โทรศัพท์</th>
                <th className="py-3 px-6">บทบาท</th>
                <th className="py-3 px-6">สถานะ</th>
                <th className="py-3 px-6">วันที่สมัคร</th>
                <th className="py-3 px-6 text-center w-28"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="py-4 px-6 text-slate-500">{user.id}</td>
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-9 h-9 rounded-full bg-slate-200 flex items-center justify-center shrink-0 text-slate-500">
                        <User className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-medium text-slate-800">{user.name}</div>
                        <div className="text-xs text-slate-400 mt-0.5">ID: {user.userId}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-slate-600">{user.email}</td>
                  <td className="py-4 px-6 text-slate-600">{user.phone}</td>
                  <td className="py-4 px-6">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium whitespace-nowrap ${
                      user.role === 'ลูกค้า' ? 'bg-green-100 text-green-700' :
                      user.role === 'เจ้าของร้าน' ? 'bg-purple-100 text-purple-700' :
                      'bg-orange-100 text-orange-700'
                    }`}>
                      {user.role}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium whitespace-nowrap ${
                      user.status === 'ใช้งานอยู่' ? 'bg-green-100 text-green-700' :
                      'bg-orange-100 text-orange-700'
                    }`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-slate-600 whitespace-nowrap">{user.date}</td>
                  <td className="py-4 px-6 text-center">
                    <button 
                      onClick={() => { setSelectedUser(user); setIsModalOpen(true); }}
                      className="whitespace-nowrap px-3 py-1.5 bg-blue-50 text-blue-600 rounded-lg text-sm font-medium hover:bg-blue-100 transition-colors"
                    >
                      จัดการผู้ใช้
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
            แสดง 1 - 10 จาก 1,248 รายการ
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
              125
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-100 transition-colors bg-white">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
      
      <UserManagementModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        user={selectedUser} 
      />
    </div>
  );
}
