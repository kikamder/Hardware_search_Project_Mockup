import React from 'react';
import { X, Camera, Trash2 } from 'lucide-react';

interface User {
  id: string;
  name: string;
  userId: string;
  email: string;
  phone: string;
  role: string;
  status: string;
  date: string;
}

interface UserManagementModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: User | null;
}

export default function UserManagementModal({ isOpen, onClose, user }: UserManagementModalProps) {
  if (!isOpen || !user) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={onClose}></div>
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl relative z-10 flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-100">
          <h2 className="text-xl font-bold text-slate-800">จัดการผู้ใช้งาน</h2>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600 transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Avatar */}
            <div className="shrink-0 flex flex-col items-center">
              <div className="relative">
                <div className="w-32 h-32 rounded-full bg-slate-200 flex items-center justify-center text-slate-400">
                  <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                </div>
                <button className="absolute bottom-0 right-0 w-8 h-8 bg-white rounded-full shadow border border-slate-100 flex items-center justify-center text-blue-600 hover:bg-slate-50">
                  <Camera className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Form Fields */}
            <div className="flex-1 space-y-6">
              <div>
                <h3 className="text-blue-600 font-bold mb-4">ข้อมูลผู้ใช้</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">ชื่อ - นามสกุล</label>
                    <input type="text" defaultValue={user.name} className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-blue-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">ประเภทผู้ใช้</label>
                    <select defaultValue={user.role} className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-blue-500 appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%24%2024%22%20fill%3D%22none%22%20stroke%3D%22%2364748b%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:right_0.5rem_center] bg-[length:1em_1em] pr-8">
                      <option value="ลูกค้า">ลูกค้า (Customer)</option>
                      <option value="เจ้าของร้าน">เจ้าของร้าน (Shop)</option>
                      <option value="ผู้ดูแลระบบ">ผู้ดูแลระบบ (Admin)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">อีเมล</label>
                    <input type="email" defaultValue={user.email} className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-blue-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">เบอร์โทรศัพท์</label>
                    <input type="text" defaultValue={user.phone} className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-blue-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">วันที่สมัคร</label>
                    <input type="text" defaultValue={user.date} disabled className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm bg-slate-50 text-slate-500" />
                  </div>
                </div>
                
                <div className="mt-4 w-full md:w-1/2 md:pr-2">
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">สถานะการใช้งาน</label>
                    <select defaultValue={user.status} className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-blue-500 appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%24%2024%22%20fill%3D%22none%22%20stroke%3D%22%2364748b%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:right_0.5rem_center] bg-[length:1em_1em] pr-8 text-green-700 font-medium bg-green-50/50">
                      <option value="ใช้งานอยู่">ใช้งานอยู่</option>
                      <option value="รอการอนุมัติ">รอการอนุมัติ</option>
                      <option value="ระงับการใช้งาน">ระงับการใช้งาน</option>
                    </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4 bg-slate-50/50 rounded-b-2xl">
          <div className="flex flex-col w-full md:w-auto items-start">
            <button className="flex items-center justify-center gap-2 px-6 py-2.5 border border-red-200 text-red-500 rounded-lg hover:bg-red-50 transition-colors text-sm font-medium w-full md:w-auto bg-white">
              <Trash2 className="w-4 h-4" />
              ลบผู้ใช้
            </button>
            <div className="flex items-center gap-1.5 mt-2 text-red-500">
              <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
              <span className="text-[11px]">การลบผู้ใช้ไม่สามารถกู้คืนข้อมูลได้</span>
            </div>
          </div>
          <div className="flex items-center gap-3 w-full md:w-auto mt-auto mb-5 md:mb-auto md:mt-0">
            <button onClick={onClose} className="flex-1 md:flex-none px-8 py-2.5 border border-slate-200 text-slate-600 rounded-lg hover:bg-slate-50 transition-colors text-sm font-medium bg-white">
              ยกเลิก
            </button>
            <button className="flex-1 md:flex-none px-8 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium shadow-sm">
              บันทึกข้อมูล
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
