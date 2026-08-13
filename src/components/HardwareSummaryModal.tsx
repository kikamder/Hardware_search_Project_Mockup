import React from 'react';
import { X, Search } from 'lucide-react';
import StoreDetailsModal_Customer from './StoreDetailsModal_Customer';

interface HardwareSummaryModalProps {
  isOpen: boolean;
  onClose: () => void;
  savedItems: { item: any; store: any }[];
}

export default function HardwareSummaryModal({ isOpen, onClose, savedItems }: HardwareSummaryModalProps) {
  const [selectedStoreModal, setSelectedStoreModal] = React.useState<any>(null);

  if (!isOpen) return null;

  const totalPrice = savedItems.reduce((sum, { item }) => {
    const numPrice = parseInt(item.price.replace(/,/g, '').replace('.-', ''));
    return sum + (isNaN(numPrice) ? 0 : numPrice);
  }, 0).toLocaleString() + '.-';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6">
      <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={onClose}></div>
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl relative z-10 flex flex-col max-h-[90vh] overflow-hidden">
        
        {/* Header */}
        <div className="flex flex-col items-center justify-center pt-8 pb-4 relative shrink-0">
          <button 
            onClick={onClose} 
            className="absolute top-6 right-6 text-slate-400 hover:text-slate-600 transition-colors p-2 rounded-full hover:bg-slate-100"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="flex items-center text-blue-600 mb-4">
            <Search className="w-8 h-8 mr-2 stroke-[3]" />
            <span className="text-3xl font-extrabold tracking-tight">PC FINDER</span>
          </div>
          
          <h2 className="text-3xl font-bold text-slate-800 mb-2">สรุปรายการสินค้า</h2>
          <p className="text-slate-500">เอกสารสรุปรายการสินค้าที่เลือก</p>
          
          <div className="w-full px-12 mt-6">
             <div className="border-b-2 border-blue-600 w-full relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-blue-600 rounded-full"></div>
             </div>
          </div>
        </div>

        {/* Content Table */}
        <div className="p-8 pt-4 overflow-y-auto flex-1">
          <div className="min-w-[700px]">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-slate-200">
                  <th className="py-4 px-4 font-bold text-slate-800 w-[30%]">ชื่อสินค้า</th>
                  <th className="py-4 px-4 font-bold text-slate-800 w-[15%]">ราคา</th>
                  <th className="py-4 px-4 font-bold text-slate-800 w-[20%]">ชื่อร้านค้า</th>
                  <th className="py-4 px-4 font-bold text-slate-800 w-[35%]">ที่อยู่ร้านค้า</th>
                </tr>
              </thead>
              <tbody>
                {savedItems.map((saved, idx) => (
                  <tr key={`${saved.item.id}-${saved.store.id}-${idx}`} className="border-b border-slate-100 last:border-b-2 last:border-slate-200">
                    <td className="py-6 px-4 text-slate-700">
                      <div className="font-medium text-sm md:text-base">{saved.item.brand} {saved.item.model}</div>
                    </td>
                    <td className="py-6 px-4 text-slate-700 font-medium whitespace-nowrap">
                      {saved.item.price}
                    </td>
                    <td className="py-6 px-4 text-slate-700">
                      {saved.store.name}
                    </td>
                    <td className="py-6 px-4 text-slate-600 text-sm leading-relaxed relative">
                      <div className="mb-2">
                        {/* Fake longer address based on image */}
                        {saved.store.location === 'กรุงเทพมหานคร' ? (
                           <>
                             99/9 ถนนลาดพร้าว<br/>
                             แขวงจอมพล เขตจตุจักร<br/>
                             กรุงเทพมหานคร 10900
                           </>
                        ) : saved.store.location === 'นนทบุรี' ? (
                           <>
                             55/1 ถนนรัตนาธิเบศร์<br/>
                             ตำบลบางกระสอ อำเภอเมืองนนทบุรี<br/>
                             นนทบุรี 11000
                           </>
                        ) : (
                           <>
                             {saved.store.location}<br/>
                             ประเทศไทย
                           </>
                        )}
                      </div>
                      <button 
                        onClick={() => setSelectedStoreModal(saved.store)}
                        className="text-blue-600 hover:text-blue-800 hover:underline text-xs font-medium"
                      >
                        ดูข้อมูลร้านค้า
                      </button>
                    </td>
                  </tr>
                ))}
                {savedItems.length === 0 && (
                  <tr>
                     <td colSpan={4} className="py-12 text-center text-slate-400">
                        ยังไม่มีสินค้ารายการที่บันทึก
                     </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          
          {/* Total Footer */}
          {savedItems.length > 0 && (
            <div className="flex justify-end items-center mt-8 pr-4">
              <span className="text-xl font-bold text-slate-800 mr-6">รวมทั้งหมด</span>
              <span className="text-3xl font-extrabold text-slate-900">{totalPrice}</span>
            </div>
          )}
        </div>
      </div>

      <StoreDetailsModal_Customer 
        isOpen={!!selectedStoreModal} 
        onClose={() => setSelectedStoreModal(null)} 
        store={selectedStoreModal} 
      />
    </div>
  );
}
