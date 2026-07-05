import React from 'react';
import { Home, Box, Store, MapPin, LogOut } from 'lucide-react';
import { useAppContext } from '../AppContext';

export default function StoreLayout({ children }: { children: React.ReactNode }) {
  const { currentView, navigate, setRole } = useAppContext();

  const handleLogout = () => {
    setRole(null);
    navigate('ROLE_SELECT');
  };

  return (
    <div className="flex h-screen w-screen bg-[#eef2f5] font-sans text-slate-800 overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 flex-shrink-0 bg-white/70 backdrop-blur-md border-r border-slate-200 flex flex-col">
        <div className="p-6 border-b border-slate-100 flex items-center space-x-3">
          <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center text-white font-bold text-xl">
            JJ
          </div>
          <div>
            <h2 className="font-bold text-slate-800">JJ Computer</h2>
            <p className="text-xs text-blue-600 font-medium">Owner</p>
          </div>
        </div>
        <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
          <button
            onClick={() => navigate('STORE_DASHBOARD')}
            className={`w-full flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-all ${
              currentView === 'STORE_DASHBOARD' ? 'bg-blue-50 text-blue-700' : 'text-slate-600 hover:bg-white/50'
            }`}
          >
            <Home className="w-5 h-5 mr-3" />
            หน้าหลัก
          </button>
          <button
            onClick={() => navigate('STORE_PRODUCTS')}
            className={`w-full flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-all ${
              currentView === 'STORE_PRODUCTS' ? 'bg-blue-50 text-blue-700' : 'text-slate-600 hover:bg-white/50'
            }`}
          >
            <Box className="w-5 h-5 mr-3" />
            จัดการสินค้า Hardware
          </button>
          <button
            onClick={() => navigate('STORE_INFO')}
            className={`w-full flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-all ${
              currentView === 'STORE_INFO' ? 'bg-blue-50 text-blue-700' : 'text-slate-600 hover:bg-white/50'
            }`}
          >
            <Store className="w-5 h-5 mr-3" />
            จัดการข้อมูลร้านค้า
          </button>
          <button
            onClick={() => navigate('STORE_LOCATION')}
            className={`w-full flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-all ${
              currentView === 'STORE_LOCATION' ? 'bg-blue-50 text-blue-700' : 'text-slate-600 hover:bg-white/50'
            }`}
          >
            <MapPin className="w-5 h-5 mr-3" />
            จัดการตำแหน่งร้านค้า
          </button>
        </nav>
        <div className="p-4 border-t border-slate-100">
          <button
            onClick={handleLogout}
            className="w-full flex items-center px-3 py-2.5 text-sm font-medium text-slate-600 hover:bg-white/50 transition-all rounded-lg"
          >
            <LogOut className="w-5 h-5 mr-3" />
            ออกจากระบบ
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-full overflow-hidden relative">
        {/* Header */}
        <header className="h-16 bg-transparent flex items-center justify-between px-6 z-10">
          <div className="flex items-center text-blue-600 font-bold text-xl">
            <Home className="w-6 h-6 mr-2" />
            PC FINDER
          </div>
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center"
          >
            <Store className="w-4 h-4 mr-2" />
            JJ Computer
          </button>
        </header>

        {/* Page Content */}
        <div className="flex-1 overflow-auto p-6">
          {children}
        </div>
      </main>
    </div>
  );
}
