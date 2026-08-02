import React from 'react';
import { useAppContext } from '../AppContext';
import { User, Store, ShieldAlert, UserCircle } from 'lucide-react';

export default function RoleSelect() {
  const { setRole, navigate } = useAppContext();

  return (
    <div className="flex h-screen w-screen bg-gradient-to-br from-[#f8fafc] via-[#eff6ff] to-[#f0fdf4] items-center justify-center font-sans relative overflow-hidden">
      {/* Decorative blurry circles in background */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-400/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-400/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-4xl w-full p-10 bg-white/60 backdrop-blur-xl rounded-[2rem] shadow-2xl border border-white relative z-10 mx-4">
        <h1 className="text-3xl font-bold text-center text-slate-800 mb-2">เลือกบทบาท (Role) เพื่อทดสอบ</h1>
        <p className="text-center text-slate-500 mb-10">กรุณาเลือกบทบาทที่คุณต้องการจำลองการใช้งานในระบบ PC FINDER</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <button
            onClick={() => { setRole('GUEST'); navigate('CUSTOMER_HOME'); }}
            className="flex flex-col items-center p-8 bg-white/50 backdrop-blur-md border border-white rounded-3xl hover:bg-white/80 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 group"
          >
            <UserCircle className="w-16 h-16 text-slate-400 mb-4 group-hover:scale-110 transition-transform" />
            <h2 className="text-lg font-bold text-slate-700">ผู้ใช้ทั่วไป</h2>
            <p className="text-sm text-slate-500 mt-2 text-center">ยังไม่ได้ล็อกอิน</p>
          </button>
          
          <button
            onClick={() => { setRole('USER'); navigate('CUSTOMER_HOME'); }}
            className="flex flex-col items-center p-8 bg-white/50 backdrop-blur-md border border-white rounded-3xl hover:bg-white/80 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 group"
          >
            <User className="w-16 h-16 text-blue-500 mb-4 group-hover:scale-110 transition-transform" />
            <h2 className="text-lg font-bold text-slate-700">ผู้ใช้งาน</h2>
            <p className="text-sm text-slate-500 mt-2 text-center">ล็อกอินแล้ว (B1)</p>
          </button>

          <button
            onClick={() => { setRole('STORE'); navigate('STORE_DASHBOARD'); }}
            className="flex flex-col items-center p-8 bg-white/50 backdrop-blur-md border border-white rounded-3xl hover:bg-white/80 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 group"
          >
            <Store className="w-16 h-16 text-orange-500 mb-4 group-hover:scale-110 transition-transform" />
            <h2 className="text-lg font-bold text-slate-700">ร้านค้า</h2>
            <p className="text-sm text-slate-500 mt-2 text-center">JJ Computer</p>
          </button>

          <button
            onClick={() => { setRole('ADMIN'); navigate('ADMIN_USERS'); }}
            className="flex flex-col items-center p-8 bg-white/50 backdrop-blur-md border border-white rounded-3xl hover:bg-white/80 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 group"
          >
            <ShieldAlert className="w-16 h-16 text-purple-500 mb-4 group-hover:scale-110 transition-transform" />
            <h2 className="text-lg font-bold text-slate-700">Admin</h2>
            <p className="text-sm text-slate-500 mt-2 text-center">ผู้ดูแลระบบ</p>
          </button>
        </div>
      </div>
    </div>
  );
}
