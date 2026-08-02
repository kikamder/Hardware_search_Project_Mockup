import React, { useState } from 'react';
import { mockStores } from '../../data';
import { Star, Heart } from 'lucide-react';
import StoreDetailsModal_Customer from '../../components/StoreDetailsModal_Customer';

export default function SavedStores() {
  const [savedStores, setSavedStores] = useState(mockStores);
  const [selectedStoreModal, setSelectedStoreModal] = useState<any>(null);

  const toggleHeart = (id: string) => {
    setSavedStores(prev => 
      prev.map(store => store.id === id ? { ...store, isSaved: !store.isSaved } : store)
    );
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-blue-600 mb-6">ร้านค้าที่บันทึกไว้</h1>
      
      <div className="space-y-4">
        {savedStores.map(store => (
          <div key={store.id} className="bg-white/60 backdrop-blur-lg border border-white rounded-3xl p-5 flex items-center justify-between shadow-xl">
            <div className="flex items-center">
              <div className="w-24 h-24 bg-white border border-white rounded-2xl mr-6 flex-shrink-0 shadow-sm flex items-center justify-center text-blue-600 font-bold text-xl">{store.name.substring(0,2).toUpperCase()}</div>
              <div>
                <h3 className="font-bold text-xl text-slate-800 mb-2">{store.name}</h3>
                <div className="flex items-center text-sm">
                  <Star className="w-5 h-5 text-orange-400 fill-current mr-1" />
                  <span className="font-bold text-orange-400 mr-2">{store.rating}</span>
                  <span className="text-slate-700 font-medium">({store.reviews > 1000 ? (store.reviews/1000).toFixed(1) + 'k' : store.reviews})</span>
                  <span className="mx-4 text-slate-300">|</span>
                  <span className="font-bold text-slate-700">{store.location}</span>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <button 
                onClick={() => setSelectedStoreModal(store)}
                className="border border-white bg-white/50 text-blue-600 font-medium rounded-2xl px-6 py-3 hover:bg-white/80 transition-all shadow-sm mr-6">
                ดูหน้าร้านค้า
              </button>
              <button 
                onClick={() => toggleHeart(store.id)}
                className="text-red-500 hover:scale-110 transition-transform focus:outline-none"
              >
                <Heart className={`w-8 h-8 ${store.isSaved ? 'fill-current' : ''}`} />
              </button>
            </div>
          </div>
        ))}
      </div>

      <StoreDetailsModal_Customer 
        isOpen={!!selectedStoreModal} 
        onClose={() => setSelectedStoreModal(null)} 
        store={selectedStoreModal} 
      />
    </div>
  );
}
