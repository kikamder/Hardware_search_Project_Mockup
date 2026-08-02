import React from 'react';
import { useAppContext } from '../../AppContext';
import { MapPin, Maximize, Plus, Minus } from 'lucide-react';

export default function LocationManagement() {
  const { navigate } = useAppContext();

  return (
    <div className="max-w-7xl mx-auto h-full flex flex-col">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-800">จัดการตำแหน่งร้านค้า</h1>
        <p className="text-slate-500 text-sm mt-1">ตั้งค่าตำแหน่งที่ตั้งของร้านค้าของคุณ</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 flex-1 min-h-0">
        {/* Form */}
        <div className="w-full lg:w-96 bg-white/60 backdrop-blur-lg border border-white rounded-3xl p-6 shadow-xl flex flex-col h-fit">
          <h2 className="font-bold text-slate-800 mb-6">ข้อมูลตำแหน่งร้านค้า</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">ที่อยู่ร้านค้า</label>
              <textarea 
                rows={3} 
                defaultValue="123/45 ถนนพหลโยธิน แขวงอนุสาวรีย์ เขตบางเขน&#10;กรุงเทพมหานคร 10220" 
                className="w-full border border-slate-200 rounded-lg px-4 py-2.5 outline-none bg-slate-50 text-slate-600 resize-none"
                readOnly
              ></textarea>
            </div>
            
            <button className="w-fit bg-white/50 border border-white text-blue-600 hover:bg-white/80 font-medium rounded-xl px-4 py-2 flex items-center transition-all shadow-sm">
              <MapPin className="w-4 h-4 mr-2" />
              ปักหมุดบนแผนที่
            </button>
            
            <div className="pt-4 flex gap-3">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-2xl px-6 py-2.5 transition-all shadow-lg shadow-blue-200">
                บันทึกข้อมูล
              </button>
              <button 
                onClick={() => navigate('STORE_DASHBOARD')}
                className="bg-white/50 border border-white hover:bg-white/80 text-slate-700 font-medium rounded-2xl px-6 py-2.5 transition-all shadow-sm"
              >
                ยกเลิก
              </button>
            </div>
          </div>
        </div>

        {/* Map area */}
        <div className="flex-1 bg-white/60 backdrop-blur-lg border border-white rounded-3xl p-6 shadow-xl flex flex-col">
          <h2 className="font-bold text-slate-800 mb-4">ตำแหน่งร้านค้าบนแผนที่</h2>
          
          <div className="flex-1 bg-white/40 rounded-2xl relative overflow-hidden border border-white flex items-center justify-center">
            {/* Fake Map Background */}
            <div className="absolute inset-0 opacity-30" style={{
              backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%239C92AC\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
            }}></div>
            
            {/* Fake Map Features */}
            <div className="absolute top-20 left-20 text-emerald-600/50 font-medium text-sm rotate-12">มหาวิทยาลัยเกษตรศาสตร์</div>
            <div className="absolute top-1/3 left-1/4 w-32 h-2 bg-yellow-400/30 rounded-full rotate-45"></div>
            <div className="absolute top-1/2 right-1/3 w-64 h-3 bg-blue-400/20 rounded-full -rotate-12"></div>
            
            {/* Pin */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-12 h-12 text-red-500 mb-4">
                <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
            </div>

            {/* Map Controls */}
            <div className="absolute top-4 right-4 bg-white/80 backdrop-blur border border-white rounded-xl shadow-md">
              <button className="p-2 hover:bg-white rounded-xl transition-colors"><Maximize className="w-5 h-5 text-slate-600" /></button>
            </div>
            
            <div className="absolute bottom-10 right-4 bg-white/80 backdrop-blur border border-white rounded-xl shadow-md flex flex-col">
              <button className="p-2 border-b border-white/50 hover:bg-white rounded-t-xl transition-colors"><Plus className="w-5 h-5 text-slate-600" /></button>
              <button className="p-2 hover:bg-white rounded-b-xl transition-colors"><Minus className="w-5 h-5 text-slate-600" /></button>
            </div>
            
            <div className="absolute bottom-2 left-2 flex items-center space-x-4 text-[10px] text-slate-500 bg-white/80 px-2 py-1 rounded">
              <span className="font-bold text-blue-500">Google</span>
              <span>Keyboard shortcuts</span>
              <span>Map data ©2026 Google</span>
              <span>Terms</span>
              <span>Report a map error</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
