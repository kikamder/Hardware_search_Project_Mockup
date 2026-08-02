import React, { useMemo, useState } from 'react';
import { useAppContext } from '../../AppContext';
import { mockHardware, mockStores } from '../../data';
import { Cpu, SquareDashedBottom, MonitorPlay, MemoryStick, HardDrive, Battery, Fan, Store as StoreIcon, MapPin, Star, AlertCircle, Heart } from 'lucide-react';
import StoreDetailsModal from '../../components/StoreDetailsModal';

export default function FindStore() {
  const { navigate, selectedHardwareIds } = useAppContext();
  const [selectedStoreModal, setSelectedStoreModal] = useState<any>(null);

  const cats = [
    { id: 'CPU', label: 'CPU', icon: Cpu },
    { id: 'MAINBOARD', label: 'Mainboard', icon: SquareDashedBottom },
    { id: 'VGA', label: 'VGA Card', icon: MonitorPlay },
    { id: 'RAM', label: 'Memory', icon: MemoryStick },
    { id: 'STORAGE', label: 'Storage', icon: HardDrive },
    { id: 'PSU', label: 'Power Supply', icon: Battery },
    { id: 'COOLER', label: 'CPU Cooler', icon: Fan },
  ];

  // Logic: 
  // Get all selected items across all categories
  const selectedItems = useMemo(() => {
    let items: any[] = [];
    Object.values(mockHardware).forEach(catItems => {
      items = [...items, ...catItems.filter(i => selectedHardwareIds.includes(i.id))];
    });
    return items;
  }, [selectedHardwareIds]);

  // Check if any selected item is "ไม่มี"
  // Wait, user instructions say: if both are selected, show stores that have "มี" items.
  // So we just filter for items that are isAvailable === true.
  // If NO items are available, show no stores.
  const availableSelectedItems = selectedItems.filter(item => item.isAvailable);
  const showStores = availableSelectedItems.length > 0;

  const totalPrice = availableSelectedItems.reduce((sum, item) => {
    const numPrice = parseInt(item.price.replace(/,/g, '').replace('.-', ''));
    return sum + (isNaN(numPrice) ? 0 : numPrice);
  }, 0).toLocaleString() + '.-';

  return (
    <div className="flex h-full gap-6">
      {/* Category Sidebar */}
      <div className="w-56 bg-white/60 backdrop-blur-lg border border-white rounded-3xl flex flex-col p-4 space-y-2 h-fit shadow-xl">
        <div className="px-4 py-3 font-bold text-slate-700 bg-white/40 border border-white/60 rounded-xl mb-2 text-center">
          เลือกฮาร์ดแวร์ที่ต้องการ
        </div>
        {cats.map(cat => {
          const hasSelected = mockHardware[cat.id]?.some(h => selectedHardwareIds.includes(h.id));
          return (
            <div
              key={cat.id}
              className="flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium text-slate-600 opacity-60"
            >
              <div className="flex items-center">
                <cat.icon className="w-5 h-5 mr-3" />
                {cat.label}
              </div>
              {hasSelected && (
                <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                </div>
              )}
            </div>
          )
        })}
        
        <div className="mt-4 pt-4">
          <button
            onClick={() => navigate('CUSTOMER_SELECT_HARDWARE')}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-2xl transition-all shadow-lg shadow-blue-200"
          >
            แก้ไขสินค้า
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        
        {/* Selected Items summary header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-slate-800">พบร้านค้าที่ตรงกับสินค้าที่เลือก {availableSelectedItems.length} รายการ</h2>
          <div className="flex items-center">
            <span className="text-sm text-slate-500 mr-2">เรียงลำดับจาก :</span>
            <select className="border border-slate-200 rounded-lg px-3 py-1.5 text-sm bg-white outline-none">
              <option>ราคาต่ำ - สูง</option>
            </select>
          </div>
        </div>

        {/* Selected Items Tag-like display */}
        <div className="flex gap-4 mb-6 overflow-x-auto pb-2">
          {availableSelectedItems.map(item => (
            <div key={item.id} className="bg-white/80 backdrop-blur-md border border-white rounded-2xl p-4 min-w-[250px] shadow-md shrink-0">
              <div className="text-xs text-slate-500 font-bold mb-1">{item.category}</div>
              <div className="text-sm text-slate-800">{item.brand} {item.model}</div>
            </div>
          ))}
          {selectedItems.length > availableSelectedItems.length && (
             <div className="bg-red-50 border border-red-200 rounded-lg p-3 min-w-[250px] shrink-0">
               <div className="text-xs text-red-500 font-bold mb-1">ไม่พบสินค้า</div>
               <div className="text-sm text-red-800">{selectedItems.length - availableSelectedItems.length} รายการที่เลือกไม่มีในสต๊อกร้านใดเลย</div>
             </div>
          )}
        </div>

        {/* Stores List */}
        <div className="flex-1 overflow-y-auto pb-6">
          {showStores ? (
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
              {mockStores.slice(0, 2).map((store, idx) => (
                <div key={store.id} className="bg-white/60 backdrop-blur-lg rounded-3xl shadow-xl border border-white p-6 flex flex-col">
                  {/* Store Header */}
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white ${idx === 0 ? 'bg-blue-600' : 'bg-green-600'}`}>
                        <StoreIcon className="w-6 h-6" />
                      </div>
                      <div className="ml-4">
                        <div className="flex items-center">
                          <h3 className="font-bold text-lg text-slate-800 mr-3">{store.name}</h3>
                          <Star className="w-4 h-4 text-orange-400 fill-current" />
                          <span className="text-sm font-bold text-slate-700 ml-1">{store.rating}</span>
                          <span className="text-sm text-slate-500 ml-1">({store.reviews})</span>
                        </div>
                        <div className="flex items-center text-slate-500 text-sm mt-1">
                          <MapPin className="w-4 h-4 mr-1 text-red-500" />
                          {store.location}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Items in store */}
                  <div className="border border-white bg-white/40 rounded-2xl overflow-hidden mb-6">
                    {availableSelectedItems.map((item, i) => (
                      <div key={item.id} className={`flex justify-between items-center p-4 ${i !== availableSelectedItems.length - 1 ? 'border-b border-white' : ''}`}>
                        <div className="text-sm text-slate-700">{item.brand} {item.model}</div>
                        <div className="flex items-center gap-3">
                          <div className="text-sm font-bold text-red-500">{item.price}</div>
                          <button className="flex items-center gap-1 px-3 py-1 border border-slate-200 text-blue-500 rounded-xl hover:bg-blue-50 transition-colors whitespace-nowrap text-sm font-medium bg-white shadow-sm">
                            <Heart className="w-4 h-4" />
                            บันทึก
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Total and Action */}
                  <div className="mt-auto">
                    <div className="bg-white/70 border border-white rounded-2xl py-4 flex justify-center items-center mb-5 text-lg shadow-sm">
                      <span className="text-slate-600 mr-4">ราคารวม :</span>
                      <span className="text-blue-600 font-bold text-2xl">{totalPrice}</span>
                      <span className="text-slate-600 ml-2">บาท</span>
                    </div>
                    <button 
                      onClick={() => setSelectedStoreModal(store)}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-2xl flex items-center justify-center transition-all shadow-lg shadow-blue-200">
                      <StoreIcon className="w-5 h-5 mr-2" />
                      ดูหน้าร้านค้า
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-slate-400">
              <StoreIcon className="w-16 h-16 mb-4 text-slate-300" />
              <p className="text-lg">ไม่พบร้านค้าที่มีสินค้าตามที่คุณเลือก</p>
              <button 
                onClick={() => navigate('CUSTOMER_SELECT_HARDWARE')}
                className="mt-4 text-blue-500 hover:underline"
              >
                กลับไปเลือกสินค้าใหม่
              </button>
            </div>
          )}
        </div>

        {/* Warning Footer */}
        <div className="bg-white/40 backdrop-blur-md border border-white text-blue-800 p-5 rounded-3xl flex items-start mt-4 shrink-0 shadow-sm">
          <AlertCircle className="w-5 h-5 mr-3 shrink-0 mt-0.5 text-blue-600" />
          <div>
            <h4 className="font-bold text-sm mb-1 text-blue-700">หมายเหตุ</h4>
            <p className="text-xs text-blue-600">ราคาและสต็อกสินค้าอาจมีการเปลี่ยนแปลง กรุณาตรวจสอบที่หน้าร้านค้าอีกครั้งก่อนทำการสั่งซื้อ</p>
          </div>
        </div>

      </div>

      <StoreDetailsModal 
        isOpen={!!selectedStoreModal} 
        onClose={() => setSelectedStoreModal(null)} 
        store={selectedStoreModal} 
      />
    </div>
  );
}
