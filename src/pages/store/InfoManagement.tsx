import React from 'react';
import { useAppContext } from '../../AppContext';

export default function InfoManagement() {
  const { navigate } = useAppContext();

  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-800">จัดการข้อมูลร้านค้า</h1>
        <p className="text-slate-500 text-sm mt-1">ดูแลและแก้ไขข้อมูลร้านค้าของคุณ</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Main Info */}
        <div className="flex-1 bg-white/60 backdrop-blur-lg border border-white rounded-3xl p-6 shadow-xl">
          <h2 className="font-bold text-slate-800 mb-6">ข้อมูลร้านค้า</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">ชื่อร้านค้า <span className="text-red-500">*</span></label>
              <input type="text" defaultValue="JJ Computer" className="w-full border border-slate-200 rounded-lg px-4 py-2.5 outline-none focus:border-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">เบอร์โทรศัพท์ <span className="text-red-500">*</span></label>
              <input type="text" defaultValue="081-234-5678" className="w-full border border-slate-200 rounded-lg px-4 py-2.5 outline-none focus:border-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">อีเมล</label>
              <input type="email" defaultValue="jjcomputer@gmail.com" className="w-full border border-slate-200 rounded-lg px-4 py-2.5 outline-none focus:border-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">ที่อยู่ร้านค้า <span className="text-red-500">*</span></label>
              <textarea rows={3} defaultValue="123/45 ถนนพหลโยธิน แขวงอนุสาวรีย์ เขตบางเขน&#10;กรุงเทพมหานคร 10220" className="w-full border border-slate-200 rounded-lg px-4 py-2.5 outline-none focus:border-blue-500 resize-none"></textarea>
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">จังหวัด <span className="text-red-500">*</span></label>
                <select className="w-full border border-slate-200 rounded-lg px-4 py-2.5 outline-none focus:border-blue-500 bg-white">
                  <option>กรุงเทพมหานคร</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">เขต/อำเภอ <span className="text-red-500">*</span></label>
                <select className="w-full border border-slate-200 rounded-lg px-4 py-2.5 outline-none focus:border-blue-500 bg-white">
                  <option>บางเขน</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">แขวง/ตำบล <span className="text-red-500">*</span></label>
                <select className="w-full border border-slate-200 rounded-lg px-4 py-2.5 outline-none focus:border-blue-500 bg-white">
                  <option>อนุสาวรีย์</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">รหัสไปรษณีย์ <span className="text-red-500">*</span></label>
              <input type="text" defaultValue="10220" className="w-full border border-slate-200 rounded-lg px-4 py-2.5 outline-none focus:border-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">เวลาทำการ</label>
              <input type="text" defaultValue="10:00 - 20:00 น. (ทุกวัน)" className="w-full border border-slate-200 rounded-lg px-4 py-2.5 outline-none focus:border-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">คำอธิบายร้านค้า</label>
              <textarea rows={3} defaultValue="จำหน่ายอุปกรณ์คอมพิวเตอร์ ประกอบคอม และอุปกรณ์เกมมิ่ง&#10;สินค้าคุณภาพ ราคายุติธรรม บริการเป็นกันเอง" className="w-full border border-slate-200 rounded-lg px-4 py-2.5 outline-none focus:border-blue-500 resize-none"></textarea>
            </div>
            
            <div className="pt-4 flex gap-3">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-2xl px-8 py-3 transition-all shadow-lg shadow-blue-200">
                บันทึกข้อมูล
              </button>
              <button 
                onClick={() => navigate('STORE_DASHBOARD')}
                className="bg-white/50 border border-white hover:bg-white/80 text-slate-700 font-medium rounded-2xl px-8 py-3 transition-all shadow-sm"
              >
                ยกเลิก
              </button>
            </div>
          </div>
        </div>

        {/* Side Info */}
        <div className="w-full lg:w-80 flex flex-col gap-6">
          <div className="bg-white/60 backdrop-blur-lg border border-white rounded-3xl p-6 shadow-xl">
            <h2 className="font-bold text-slate-800 mb-4">โลโก้ร้านค้า</h2>
            <div className="w-32 h-32 bg-blue-900 rounded-3xl flex flex-col items-center justify-center text-white mb-4 mx-auto shadow-md border border-white/40">
              <div className="text-4xl font-bold">JJ</div>
              <div className="text-xs tracking-widest mt-1">COMPUTER</div>
            </div>
            <button className="w-full bg-white/50 border border-white text-blue-600 hover:bg-white/80 font-medium rounded-2xl px-4 py-2 transition-all shadow-sm">
              เปลี่ยนโลโก้
            </button>
            <p className="text-xs text-slate-400 text-center mt-2">รองรับไฟล์ JPG, PNG ขนาดไม่เกิน 2MB</p>
          </div>

          <div className="bg-white/60 backdrop-blur-lg border border-white rounded-3xl p-6 shadow-xl">
            <h2 className="font-bold text-slate-800 mb-4">ช่องทางการติดต่อเพิ่มเติม</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Facebook</label>
                <input type="text" defaultValue="JJ Computer" className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Line</label>
                <input type="text" defaultValue="@jjcomputer" className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">เว็บไซต์</label>
                <input type="text" defaultValue="https://jjcomputer.com" className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">หมายเหตุ</label>
                <textarea rows={2} defaultValue="ขอบคุณที่ใช้บริการครับ 😊" className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-500 resize-none"></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
