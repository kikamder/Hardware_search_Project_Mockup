import React from 'react';
import { Home, Search, Heart, Plus, Folder, User, LogIn } from 'lucide-react';
import { useAppContext } from '../AppContext';

export default function CustomerLayout({ children }: { children: React.ReactNode }) {
  const { role, currentView, navigate, setRole } = useAppContext();

  const handleLogout = () => {
    setRole(null);
    navigate('ROLE_SELECT');
  };

  return (
    <div className="flex h-screen w-screen bg-[#eef2f5] font-sans text-slate-800 overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 flex-shrink-0 bg-white/70 backdrop-blur-md border-r border-slate-200 flex flex-col">
        <div className="h-16 flex items-center px-6 border-b border-slate-100">
          <div className="flex items-center text-blue-600 font-bold text-xl cursor-pointer" onClick={() => navigate('CUSTOMER_HOME')}>
            <Home className="w-6 h-6 mr-2" />
            PC FINDER
          </div>
        </div>
        <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
          <button
            onClick={() => navigate('CUSTOMER_HOME')}
            className={`w-full flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-all ${
              currentView === 'CUSTOMER_HOME' ? 'bg-blue-50 text-blue-700' : 'text-slate-600 hover:bg-white/50'
            }`}
          >
            <Home className="w-5 h-5 mr-3" />
            หน้าแรก
          </button>
          <button
            onClick={() => navigate('CUSTOMER_SELECT_HARDWARE')}
            className={`w-full flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-all ${
              currentView === 'CUSTOMER_SELECT_HARDWARE' ? 'bg-blue-50 text-blue-700' : 'text-slate-600 hover:bg-white/50'
            }`}
          >
            <Search className="w-5 h-5 mr-3" />
            เลือกฮาร์ดแวร์
          </button>

          {role === 'USER' && (
            <>
              <button
                onClick={() => navigate('CUSTOMER_SAVED_STORES')}
                className={`w-full flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-all ${
                  currentView === 'CUSTOMER_SAVED_STORES' ? 'bg-blue-50 text-blue-700' : 'text-slate-600 hover:bg-white/50'
                }`}
              >
                <Heart className="w-5 h-5 mr-3" />
                ร้านค้าที่บันทึกไว้
              </button>
              <button
                onClick={() => navigate('CUSTOMER_SAVED_DEVICES')}
                className={`w-full flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-all ${
                  currentView === 'CUSTOMER_SAVED_DEVICES' ? 'bg-blue-50 text-blue-700' : 'text-slate-600 hover:bg-white/50'
                }`}
              >
                <Plus className="w-5 h-5 mr-3" />
                อุปกรณ์ที่บันทึกไว้
              </button>
              <button
                onClick={() => navigate('CUSTOMER_DEVICE_FOLDERS')}
                className={`w-full flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-all ${
                  currentView === 'CUSTOMER_DEVICE_FOLDERS' ? 'bg-blue-50 text-blue-700' : 'text-slate-600 hover:bg-white/50'
                }`}
              >
                <Folder className="w-5 h-5 mr-3" />
                แฟ้มอุปกรณ์
              </button>
            </>
          )}
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-full overflow-hidden relative">
        {/* Header */}
        <header className="h-16 bg-transparent flex items-center justify-end px-6 z-10">
          {role === 'GUEST' ? (
            <button
              onClick={() => {
                setRole('USER');
                navigate('CUSTOMER_HOME');
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center transition-colors"
            >
              เข้าสู่ระบบ
            </button>
          ) : (
            <div className="flex items-center space-x-4">
              <button
                className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center"
              >
                <User className="w-4 h-4 mr-2" />
                B1
              </button>
              <button
                onClick={handleLogout}
                className="text-slate-400 hover:text-slate-600"
              >
                <LogOut className="w-5 h-5" />
              </button>
            </div>
          )}
        </header>

        {/* Page Content */}
        <div className="flex-1 overflow-auto p-6">
          {children}
        </div>
      </main>
    </div>
  );
}

// Add LogOut import since it was missing
import { LogOut } from 'lucide-react';
