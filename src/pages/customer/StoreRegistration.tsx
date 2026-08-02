import React from 'react';
import { Upload, Send, ChevronRight } from 'lucide-react';
import { useAppContext } from '../../AppContext';

export default function StoreRegistration() {
  return (
    <div className="max-w-5xl mx-auto h-full flex flex-col pt-2 pb-4">
      <div className="mb-4 px-1">
        <h1 className="text-xl font-bold text-slate-800">กรอกฟอร์มร้านค้า</h1>
        <p className="text-sm text-slate-600 mt-1.5">กรุณากรอกข้อมูลให้ครบถ้วน เพื่อส่งคำขอเปิดร้านค้า ระบบจะตรวจสอบข้อมูลและแจ้งผลการอนุมัติให้ทราบอีกครั้ง</p>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex-1 flex flex-col min-h-0">
        <div className="p-6 overflow-y-auto custom-scrollbar">
          
          {/* ข้อมูลร้านค้า */}
          <div className="mb-6">
            <h3 className="text-base font-bold text-slate-800 mb-3">ข้อมูลร้านค้า</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
              <div className="md:col-span-1">
                <label className="block text-xs font-medium text-slate-700 mb-1.5">
                  รูปโปรไฟล์ร้าน <span className="text-red-500">*</span>
                </label>
                <div className="border-2 border-dashed border-slate-200 rounded-lg bg-slate-50 flex flex-col items-center justify-center p-4 h-[130px] hover:bg-slate-100 transition-colors cursor-pointer">
                  <Upload className="w-6 h-6 text-slate-400 mb-1.5" />
                  <span className="text-xs font-medium text-slate-700">คลิกเพื่ออัปโหลดรูปภาพ</span>
                  <span className="text-[10px] text-slate-500 mt-0.5">รองรับไฟล์ JPG, PNG (ขนาดไม่เกิน 2MB)</span>
                </div>
              </div>
              <div className="md:col-span-3 space-y-3">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1.5">
                      ชื่อร้านค้า <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="text" 
                      placeholder="กรอกชื่อร้านค้า" 
                      className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-500 bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1.5">
                      ประเภทร้านค้า <span className="text-red-500">*</span>
                    </label>
                    <select className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-500 bg-white appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%24%2024%22%20fill%3D%22none%22%20stroke%3D%22%2364748b%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:right_0.5rem_center] bg-[length:1em_1em] pr-8">
                      <option value="">เลือกประเภทร้านค้า</option>
                      <option value="1">ร้านขายอุปกรณ์คอมพิวเตอร์</option>
                      <option value="2">ร้านซ่อมคอมพิวเตอร์</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1.5">
                    คำอธิบายร้านค้า <span className="text-red-500">*</span>
                  </label>
                  <textarea 
                    rows={2}
                    placeholder="กรอกคำอธิบายเกี่ยวกับร้านค้า สินค้า และบริการของคุณ" 
                    className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-500 bg-white resize-none"
                  ></textarea>
                  <div className="text-right text-[10px] text-slate-400 mt-0.5">0 / 500</div>
                </div>
              </div>
            </div>
          </div>

          <hr className="border-slate-100 mb-6" />

          {/* ข้อมูลการติดต่อ */}
          <div className="mb-6">
            <h3 className="text-base font-bold text-slate-800 mb-3">ข้อมูลการติดต่อ</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-3">
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1.5">
                  เบอร์โทรศัพท์ <span className="text-red-500">*</span>
                </label>
                <input 
                  type="text" 
                  placeholder="เช่น 081-234-5678" 
                  className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-500 bg-white"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1.5">
                  อีเมลสำหรับติดต่อ <span className="text-red-500">*</span>
                </label>
                <input 
                  type="email" 
                  placeholder="เช่น contact@jjcomputer.com" 
                  className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-500 bg-white"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1.5">
                  Line ID
                </label>
                <input 
                  type="text" 
                  placeholder="เช่น @jjcomputer" 
                  className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-500 bg-white"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1.5">
                  เว็บไซต์ (ถ้ามี)
                </label>
                <input 
                  type="text" 
                  placeholder="เช่น https://www.jjcomputer.com" 
                  className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-500 bg-white"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1.5">
                  Facebook Page
                </label>
                <input 
                  type="text" 
                  placeholder="เช่น JJ Computer" 
                  className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-500 bg-white"
                />
              </div>
            </div>
          </div>

          <hr className="border-slate-100 mb-6" />

          {/* ที่อยู่ร้านค้า */}
          <div className="mb-6">
            <h3 className="text-base font-bold text-slate-800 mb-3">ที่อยู่ร้านค้า</h3>
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1.5">
                  ที่อยู่เดิม <span className="text-red-500">*</span>
                </label>
                <input 
                  type="text"
                  placeholder="กรุณากรอกที่อยู่ร้านค้าให้ละเอียด (เลขที่ ซอย ถนน แขวง/ตำบล เขต/อำเภอ จังหวัด รหัสไปรษณีย์)" 
                  className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-500 bg-white"
                />
                <div className="text-right text-[10px] text-slate-400 mt-0.5">0 / 300</div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1.5">
                    จังหวัด <span className="text-red-500">*</span>
                  </label>
                  <select className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-500 bg-white appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%24%2024%22%20fill%3D%22none%22%20stroke%3D%22%2364748b%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:right_0.5rem_center] bg-[length:1em_1em] pr-8">
                    <option value="">เลือกจังหวัด</option>
                    <option value="bkk">กรุงเทพมหานคร</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1.5">
                    เขต / อำเภอ <span className="text-red-500">*</span>
                  </label>
                  <select className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-500 bg-white appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%24%2024%22%20fill%3D%22none%22%20stroke%3D%22%2364748b%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:right_0.5rem_center] bg-[length:1em_1em] pr-8">
                    <option value="">เลือกเขต / อำเภอ</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1.5">
                    แขวง / ตำบล <span className="text-red-500">*</span>
                  </label>
                  <select className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-500 bg-white appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%24%2024%22%20fill%3D%22none%22%20stroke%3D%22%2364748b%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:right_0.5rem_center] bg-[length:1em_1em] pr-8">
                    <option value="">เลือกแขวง / ตำบล</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1.5">
                    รหัสไปรษณีย์ <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text" 
                    placeholder="เช่น 10150" 
                    className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-500 bg-white"
                  />
                </div>
              </div>
            </div>
          </div>

          <hr className="border-slate-100 mb-6" />

          {/* เวลาทำการ */}
          <div>
            <h3 className="text-base font-bold text-slate-800 mb-3">เวลาทำการ</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1.5">
                  เวลาเปิดร้าน <span className="text-red-500">*</span>
                </label>
                <select className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-500 bg-white appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%24%2024%22%20fill%3D%22none%22%20stroke%3D%22%2364748b%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:right_0.5rem_center] bg-[length:1em_1em] pr-8">
                  <option value="">เช่น 09:00</option>
                  <option value="09:00">09:00</option>
                  <option value="10:00">10:00</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1.5">
                  เวลาปิดร้าน <span className="text-red-500">*</span>
                </label>
                <select className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-500 bg-white appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%24%2024%22%20fill%3D%22none%22%20stroke%3D%22%2364748b%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:right_0.5rem_center] bg-[length:1em_1em] pr-8">
                  <option value="">เช่น 18:00</option>
                  <option value="18:00">18:00</option>
                  <option value="20:00">20:00</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1.5">
                  ปิดทำการวัน
                </label>
                <select className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-500 bg-white appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%24%2024%22%20fill%3D%22none%22%20stroke%3D%22%2364748b%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:right_0.5rem_center] bg-[length:1em_1em] pr-8">
                  <option value="">เลือกวันที่ปิดทำการ</option>
                  <option value="sun">วันอาทิตย์</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="p-4 border-t border-slate-200 bg-slate-50 flex justify-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-8 rounded-lg flex items-center gap-2 transition-colors shadow-sm text-sm">
            <Send className="w-4 h-4" />
            ส่งคำขอเปิดร้านค้า
          </button>
        </div>
      </div>
    </div>
  );
}
