import React from 'react';
import { X, Heart, Clock, Phone, MessageCircle, Facebook, MapPin, ShoppingBag } from 'lucide-react';
import { useAppContext } from '../AppContext';

interface StoreDetailsModalCustomerProps {
  isOpen: boolean;
  onClose: () => void;
  store: any;
}

export default function StoreDetailsModal_Customer({ isOpen, onClose, store }: StoreDetailsModalCustomerProps) {
  const { navigate } = useAppContext();
  if (!isOpen || !store) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-6">
      <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={onClose}></div>
      <div className="bg-[#f8fafc] rounded-3xl shadow-2xl w-full max-w-5xl relative z-10 flex flex-col max-h-[95vh] overflow-hidden">
        
        {/* Header Title */}
        <div className="flex items-center justify-between p-6 pb-2 shrink-0">
          <h2 className="text-2xl font-bold text-slate-800">ข้อมูลร้านค้า</h2>
          <button 
            onClick={onClose} 
            className="text-slate-400 hover:text-slate-600 transition-colors p-2 rounded-full hover:bg-slate-200"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          
          {/* Top Card: Store Header */}
          <div className="bg-white rounded-2xl p-6 border border-slate-100 flex flex-col md:flex-row items-center justify-between shadow-sm gap-6">
            <div className="flex items-center gap-6">
              <div className="w-24 h-24 rounded-full bg-[#0f172a] text-white flex flex-col items-center justify-center shadow-md shrink-0">
                <span className="text-3xl font-bold leading-none">{store?.name?.substring(0, 2).toUpperCase() || 'ST'}</span>
                <span className="text-[8px] tracking-widest mt-1 opacity-80 uppercase">COMPUTER</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-800 mb-1">{store?.name}</h3>
                <p className="text-slate-500 text-sm mb-3">จำหน่ายอุปกรณ์คอมพิวเตอร์ และสินค้าไอทีคุณภาพ</p>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#e6f4ea] text-[#137333] text-sm font-medium">
                  <div className="w-2 h-2 rounded-full bg-[#137333] mr-2"></div>
                  เปิดให้บริการ
                </div>
              </div>
            </div>
            <button className="flex items-center px-6 py-2.5 border border-slate-200 text-slate-600 rounded-xl hover:bg-slate-50 transition-colors font-medium shadow-sm shrink-0 whitespace-nowrap">
              <Heart className="w-5 h-5 mr-2 text-slate-400" />
              บันทึกร้านนี้
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left: Contact Info */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm flex flex-col overflow-hidden">
              <div className="px-6 py-4 border-b border-slate-100">
                <h3 className="font-bold text-slate-800">รายละเอียดร้านค้า</h3>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-center space-y-6">
                <div className="flex items-start">
                  <div className="w-10 flex shrink-0 justify-center">
                    <Clock className="w-6 h-6 text-slate-400" />
                  </div>
                  <div className="flex-1 ml-2">
                    <div className="text-slate-500 text-sm mb-1">เวลาเปิด - ปิด</div>
                  </div>
                  <div className="flex-1 text-sm font-medium">
                    <div className="text-slate-700">จันทร์ - เสาร์ 09:00 - 18:00 น.</div>
                    <div className="text-red-500 mt-1">อาทิตย์ ปิดทำการ</div>
                  </div>
                </div>
                
                <div className="border-t border-slate-100"></div>
                
                <div className="flex items-center">
                  <div className="w-10 flex shrink-0 justify-center">
                    <Phone className="w-6 h-6 text-slate-400" />
                  </div>
                  <div className="flex-1 ml-2">
                    <div className="text-slate-500 text-sm">เบอร์โทรศัพท์</div>
                  </div>
                  <div className="flex-1 text-sm font-medium text-blue-600">
                    {store?.phone || '081-234-5678'}
                  </div>
                </div>

                <div className="border-t border-slate-100"></div>
                
                <div className="flex items-center">
                  <div className="w-10 flex shrink-0 justify-center">
                    <div className="w-7 h-7 bg-[#00B900] rounded flex items-center justify-center text-white font-bold text-xs">
                      LINE
                    </div>
                  </div>
                  <div className="flex-1 ml-2">
                    <div className="text-slate-500 text-sm">Line</div>
                  </div>
                  <div className="flex-1 text-sm font-medium text-blue-600">
                    @{store?.name?.toLowerCase().replace(/\s/g, '') || 'store'}
                  </div>
                </div>

                <div className="border-t border-slate-100"></div>

                <div className="flex items-center">
                  <div className="w-10 flex shrink-0 justify-center">
                    <div className="w-7 h-7 bg-[#1877F2] rounded-full flex items-center justify-center text-white">
                      <Facebook className="w-4 h-4 fill-current" />
                    </div>
                  </div>
                  <div className="flex-1 ml-2">
                    <div className="text-slate-500 text-sm">Facebook</div>
                  </div>
                  <div className="flex-1 text-sm font-medium text-blue-600">
                    {store?.name || 'Store Facebook'}
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Map */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-2">
              <div className="w-full h-full min-h-[300px] bg-slate-100 rounded-xl relative overflow-hidden border border-slate-200 flex items-center justify-center">
                {/* Fake map image background using SVG pattern */}
                <div className="absolute inset-0 opacity-40 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CgkJPHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPgoJCTxwYXRoIGQ9Ik0wIDEwaDQwTTAgMjBoNDBNMCAzMGg0ME0xMCAwdjQwTTIwIDB2NDBNMzAgMHY0MCIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9IjEiIG9wYWNpdHk9IjAuMSIvPgoJPC9zdmc+')]"></div>
                <div className="absolute inset-0 opacity-10 bg-blue-500/20"></div>
                
                {/* Custom Map Pin */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center shadow-md border-2 border-white z-10">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                  <div className="w-0 h-0 border-l-[8px] border-r-[8px] border-t-[10px] border-l-transparent border-r-transparent border-t-red-500 -mt-[4px]"></div>
                  <div className="w-3 h-1 bg-black/20 rounded-[100%] mt-1 blur-[1px]"></div>
                  <div className="absolute top-1 left-10 whitespace-nowrap bg-white/90 px-2 py-1 rounded shadow text-xs font-bold text-red-600">
                    {store?.name}
                  </div>
                </div>
                
                {/* Map Controls Fake */}
                <div className="absolute right-4 bottom-4 flex flex-col bg-white rounded shadow-sm border border-slate-200 text-slate-600">
                  <div className="p-2 border-b border-slate-200 font-bold text-lg leading-none cursor-pointer hover:bg-slate-50">+</div>
                  <div className="p-2 font-bold text-lg leading-none cursor-pointer hover:bg-slate-50">−</div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom: Address */}
          <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm flex items-start gap-4">
             <div className="mt-1 text-slate-700">
               <MapPin className="w-6 h-6" />
             </div>
             <div>
               <h3 className="font-bold text-slate-800 mb-1">ที่อยู่ร้านค้า</h3>
               <p className="text-slate-600 text-sm leading-relaxed">
                 62/17 หมู่ 2 ซอยเอกชัย 28-30 ถนนเอกชัย<br/>
                 แขวงบางขุนเทียน เขตจอมทอง กรุงเทพมหานคร 10150<br/>
                 ประเทศไทย
               </p>
             </div>
          </div>
          
          {/* Action Button */}
          <div className="flex justify-center pt-2">
            <button 
              onClick={() => {
                onClose();
                navigate('CUSTOMER_STORE_PRODUCTS');
              }}
              className="bg-[#1b5df2] hover:bg-blue-700 text-white px-8 py-3.5 rounded-xl font-medium flex items-center justify-center transition-colors shadow-md w-full md:w-auto min-w-[300px]"
            >
              <ShoppingBag className="w-5 h-5 mr-2" />
              ดูสินค้าทั้งหมดของร้าน
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
