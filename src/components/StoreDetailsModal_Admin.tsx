import React from 'react';
import { ArrowLeft, User, Mail, Phone, Clock, Calendar, Download, MapPin } from 'lucide-react';

interface Store {
  id: string;
  name: string;
  owner: string;
  email: string;
  phone: string;
  status: string;
  date: string;
}

interface StoreDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  store: Store | null;
}

export default function StoreDetailsModal({ isOpen, onClose, store }: StoreDetailsModalProps) {
  if (!isOpen || !store) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6">
      <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={onClose}></div>
      <div className="bg-slate-50 rounded-2xl shadow-2xl w-full max-w-7xl relative z-10 flex flex-col max-h-full overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 bg-white border-b border-slate-200 shrink-0">
          <div>
            <h2 className="text-2xl font-bold text-slate-800">รายละเอียดร้านค้า</h2>
            <p className="text-slate-500 text-sm mt-1">ข้อมูลรายละเอียดของร้านค้าที่เลือก</p>
          </div>
          <button 
            onClick={onClose} 
            className="flex items-center px-4 py-2 border border-slate-200 text-slate-600 rounded-lg hover:bg-slate-50 transition-colors text-sm font-medium shadow-sm"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            กลับไปหน้ารายการร้านค้า
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Top Left: Profile */}
            <div className="lg:col-span-2 bg-white rounded-2xl p-6 border border-slate-200 flex flex-col md:flex-row gap-8 shadow-sm">
               <div className="shrink-0 flex items-start">
                  <div className="w-32 h-32 rounded-full bg-slate-900 text-white flex flex-col items-center justify-center shadow-md">
                    <span className="text-4xl font-bold leading-none">{store.name.substring(0, 2).toUpperCase()}</span>
                    <span className="text-[10px] tracking-widest mt-1 opacity-80 uppercase">COMPUTER</span>
                  </div>
               </div>
               <div className="flex-1 space-y-5">
                  <div className="flex items-center gap-4">
                    <h3 className="text-2xl font-bold text-slate-800">{store.name}</h3>
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                      store.status === 'อนุมัติแล้ว' ? 'bg-green-100 text-green-700' :
                      store.status === 'รอการอนุมัติ' ? 'bg-orange-100 text-orange-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {store.status}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-6 text-sm">
                    <div className="flex items-center text-slate-600">
                      <User className="w-4 h-4 mr-3 text-slate-400 shrink-0" />
                      <span className="w-24 text-slate-500 shrink-0">เจ้าของร้าน</span>
                      <span className="font-medium text-slate-800 truncate">: {store.owner}</span>
                    </div>
                    <div className="flex items-center text-slate-600">
                      <Mail className="w-4 h-4 mr-3 text-slate-400 shrink-0" />
                      <span className="w-24 text-slate-500 shrink-0">อีเมล</span>
                      <span className="font-medium text-slate-800 truncate">: {store.email}</span>
                    </div>
                    <div className="flex items-center text-slate-600">
                      <Phone className="w-4 h-4 mr-3 text-slate-400 shrink-0" />
                      <span className="w-24 text-slate-500 shrink-0">เบอร์โทรศัพท์</span>
                      <span className="font-medium text-slate-800 truncate">: {store.phone}</span>
                    </div>
                    <div className="flex items-center text-slate-600">
                      <Clock className="w-4 h-4 mr-3 text-slate-400 shrink-0" />
                      <span className="w-24 text-slate-500 shrink-0">วันที่สมัคร</span>
                      <span className="font-medium text-slate-800 truncate">: {store.date} เวลา 10:30 น.</span>
                    </div>
                    <div className="flex items-center text-slate-600 md:col-span-2">
                      <Calendar className="w-4 h-4 mr-3 text-slate-400 shrink-0" />
                      <span className="w-24 text-slate-500 shrink-0">อัปเดตล่าสุด</span>
                      <span className="font-medium text-slate-800 truncate">: 25 พ.ค. 2567 เวลา 14:15 น.</span>
                    </div>
                  </div>
               </div>
            </div>

            {/* Top Right: Status */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
              <div className="bg-[#f0fdf4] px-6 py-4 border-b border-green-100">
                <h3 className="font-bold text-green-800">สถานะการสมัคร</h3>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="space-y-4 flex-1 text-sm">
                  <div className="flex">
                    <span className="w-24 text-slate-500">สถานะปัจจุบัน</span>
                    <span className="mr-2">:</span>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      store.status === 'อนุมัติแล้ว' ? 'bg-green-100 text-green-700' :
                      store.status === 'รอการอนุมัติ' ? 'bg-orange-100 text-orange-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {store.status}
                    </span>
                  </div>
                  <div className="flex">
                    <span className="w-24 text-slate-500">วันที่อนุมัติ</span>
                    <span className="mr-2">:</span>
                    <span className="font-medium text-slate-800">24 พ.ค. 2567 เวลา 09:45 น.</span>
                  </div>
                  <div className="flex">
                    <span className="w-24 text-slate-500">โดย</span>
                    <span className="mr-2">:</span>
                    <span className="font-medium text-slate-800">Admin</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <select className="px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-blue-500 appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%24%2024%22%20fill%3D%22none%22%20stroke%3D%22%2364748b%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:right_0.5rem_center] bg-[length:1em_1em] pr-8 text-slate-700 font-medium">
                    <option>เปลี่ยนสถานะ</option>
                    <option>อนุมัติ</option>
                    <option>ไม่อนุมัติ</option>
                  </select>
                  <button className="px-3 py-2 border border-red-300 text-red-500 rounded-lg text-sm font-medium hover:bg-red-50 transition-colors">
                    ระงับร้านค้า
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Bottom Left: Info & Docs */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-8">
              {/* Info */}
              <div>
                <h3 className="font-bold text-slate-800 mb-6 text-base">ข้อมูลร้านค้า</h3>
                <div className="space-y-4 text-sm">
                  {[
                    { label: 'ชื่อร้านค้า', value: store.name },
                    { label: 'ชื่อเจ้าของร้าน', value: store.owner },
                    { label: 'อีเมล', value: store.email },
                    { label: 'เบอร์โทรศัพท์', value: store.phone },
                    { label: 'เบอร์โทรศัพท์สำรอง', value: '02-123-4567' },
                    { label: 'LINE ID', value: store.name.toLowerCase().replace(' ', '') },
                    { label: 'เว็บไซต์', value: `www.${store.name.toLowerCase().replace(' ', '')}.com` },
                    { label: 'Facebook', value: store.name },
                    { label: 'คำอธิบายร้านค้า', value: 'ร้านจำหน่ายอุปกรณ์คอมพิวเตอร์ ประกอบคอมฯ และอุปกรณ์เกมมิ่ง\nสินค้าของแท้ ราคาย่อมเยา บริการดี มีหน้าร้าน' },
                  ].map((item, index) => (
                    <div key={index} className="flex">
                      <span className="w-36 shrink-0 text-slate-500">{item.label}</span>
                      <span className="mr-4 text-slate-400">:</span>
                      <span className="font-medium text-slate-800 whitespace-pre-line leading-relaxed">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Docs */}
              <div>
                <h3 className="font-bold text-slate-800 mb-4 text-base">เอกสารประกอบ</h3>
                <div className="overflow-x-auto border border-slate-200 rounded-xl">
                  <table className="w-full text-left border-collapse text-sm">
                    <thead>
                      <tr className="bg-slate-50 border-b border-slate-200 text-xs font-medium text-slate-500">
                        <th className="py-3 px-4 w-12 text-center">#</th>
                        <th className="py-3 px-4">ชื่อเอกสาร</th>
                        <th className="py-3 px-4">ประเภทเอกสาร</th>
                        <th className="py-3 px-4">วันที่อัปโหลด</th>
                        <th className="py-3 px-4 text-center w-16">จัดการ</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {[
                        { id: 1, name: 'บัตรประชาชนเจ้าของร้าน.pdf', type: 'บัตรประชาชน', color: 'bg-blue-50 text-blue-600' },
                        { id: 2, name: 'หนังสือรับรองบริษัท.pdf', type: 'หนังสือรับรองบริษัท', color: 'bg-indigo-50 text-indigo-600' },
                        { id: 3, name: 'รูปภาพหน้าร้าน.jpg', type: 'รูปภาพหน้าร้าน', color: 'bg-purple-50 text-purple-600' },
                      ].map((doc) => (
                        <tr key={doc.id} className="hover:bg-slate-50/50 transition-colors">
                          <td className="py-3 px-4 text-center text-slate-500">{doc.id}</td>
                          <td className="py-3 px-4 font-medium text-slate-800">{doc.name}</td>
                          <td className="py-3 px-4">
                            <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium ${doc.color}`}>
                              {doc.type}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-slate-500">20 พ.ค. 2567 10:30 น.</td>
                          <td className="py-3 px-4 text-center">
                            <button className="text-slate-400 hover:text-blue-600 p-1.5 rounded-md hover:bg-blue-50 transition-colors">
                              <Download className="w-4 h-4" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Bottom Right: Address */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col">
              <h3 className="font-bold text-slate-800 mb-6 text-base">ที่อยู่ร้านค้า</h3>
              <div className="space-y-4 text-sm mb-6 flex-1">
                {[
                  { label: 'ที่อยู่', value: '99/9 อาคารไอที ซิตี้ ชั้น 2 ห้อง 210\nถ.รามคำแหง แขวงหัวหมาก\nเขตบางกะปิ กรุงเทพมหานคร 10240' },
                  { label: 'ประเทศ', value: 'ไทย' },
                  { label: 'จังหวัด', value: 'กรุงเทพมหานคร' },
                  { label: 'เขต / อำเภอ', value: 'บางกะปิ' },
                  { label: 'แขวง / ตำบล', value: 'หัวหมาก' },
                  { label: 'รหัสไปรษณีย์', value: '10240' },
                ].map((item, index) => (
                  <div key={index} className="flex">
                    <span className="w-32 shrink-0 text-slate-500">{item.label}</span>
                    <span className="mr-4 text-slate-400">:</span>
                    <span className="font-medium text-slate-800 whitespace-pre-line leading-relaxed">{item.value}</span>
                  </div>
                ))}
              </div>
              
              {/* Map Placeholder */}
              <div className="h-64 bg-slate-100 rounded-xl border border-slate-200 relative overflow-hidden flex items-center justify-center">
                {/* Fake map image background using SVG pattern */}
                <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CgkJPHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPgoJCTxwYXRoIGQ9Ik0wIDEwaDQwTTAgMjBoNDBNMCAzMGg0ME0xMCAwdjQwTTIwIDB2NDBNMzAgMHY0MCIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9IjEiIG9wYWNpdHk9IjAuMSIvPgoJPC9zdmc+')]"></div>
                <div className="absolute inset-0 opacity-10 bg-blue-500/10"></div>
                
                {/* Custom Map Pin */}
                <div className="relative z-10 flex flex-col items-center pb-6">
                  <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center shadow-lg border-4 border-white z-10">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div className="w-0 h-0 border-l-[10px] border-r-[10px] border-t-[14px] border-l-transparent border-r-transparent border-t-red-500 -mt-[6px]"></div>
                  <div className="w-4 h-1.5 bg-black/20 rounded-[100%] mt-1 blur-[1px]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
