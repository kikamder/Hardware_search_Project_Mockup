import React from 'react';
import { Home, Users, Store, LogOut, User, ChevronRight } from 'lucide-react';
import { useAppContext } from '../AppContext';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const { currentView, navigate, setRole } = useAppContext();

  const handleLogout = () => {
    setRole(null);
    navigate('ROLE_SELECT');
  };

  return (
    <div className="flex h-screen w-screen bg-[#eef2f5] font-sans text-slate-800 overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 flex-shrink-0 bg-white/70 backdrop-blur-md border-r border-slate-200 flex flex-col">
        <div className="h-20 flex items-center px-6 border-b border-slate-200">
          <div className="flex items-center text-blue-600 font-bold text-xl cursor-pointer" onClick={() => navigate('ADMIN_USERS')}>
            <Home className="w-6 h-6 mr-3" />
            PC FINDER
          </div>
        </div>
        <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-1">
          <div className="px-3 mb-2 text-xs font-bold text-slate-400 uppercase tracking-wider">Admin Menu</div>
          <button
            onClick={() => navigate('ADMIN_USERS')}
            className={`w-full flex items-center px-3 py-3 text-sm font-medium rounded-xl transition-all ${
              currentView === 'ADMIN_USERS' ? 'bg-blue-50 text-blue-600' : 'text-slate-600 hover:bg-slate-50'
            }`}
          >
            <Users className={`w-5 h-5 mr-3 ${currentView === 'ADMIN_USERS' ? 'text-blue-600' : 'text-slate-400'}`} />
            จัดการผู้ใช้
          </button>
          <button
            onClick={() => navigate('ADMIN_STORES')}
            className={`w-full flex items-center px-3 py-3 text-sm font-medium rounded-xl transition-all ${
              currentView === 'ADMIN_STORES' ? 'bg-blue-50 text-blue-600' : 'text-slate-600 hover:bg-slate-50'
            }`}
          >
            <Store className={`w-5 h-5 mr-3 ${currentView === 'ADMIN_STORES' ? 'text-blue-600' : 'text-slate-400'}`} />
            จัดการร้านค้า
          </button>
        </nav>
        <div className="p-4 border-t border-slate-200">
          <button
            onClick={handleLogout}
            className="w-full flex items-center px-3 py-3 text-sm font-medium text-slate-600 hover:bg-slate-50 transition-all rounded-xl"
          >
            <LogOut className="w-5 h-5 mr-3 text-slate-400" />
            ออกจากระบบ
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-full overflow-hidden relative bg-[#f8fafc]">
        {/* Header */}
        <header className="h-20 bg-white/50 backdrop-blur-sm flex items-center justify-between px-8 z-10 border-b border-slate-200/50">
          <div className="flex items-center text-sm font-medium text-slate-500">
            <span className="text-blue-600 cursor-pointer" onClick={() => navigate('ADMIN_USERS')}>หน้าแรก</span>
            <ChevronRight className="w-4 h-4 mx-1.5 text-slate-400" />
            <span className="text-slate-800 font-bold">
              {currentView === 'ADMIN_USERS' ? 'จัดการผู้ใช้' : currentView === 'ADMIN_STORES' ? 'จัดการร้านค้า' : ''}
            </span>
          </div>
          
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-slate-500" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-slate-800">Admin</span>
                <span className="text-xs text-slate-500">ผู้ดูแลระบบ</span>
              </div>
            </div>
            <button onClick={handleLogout} className="text-slate-400 hover:text-slate-600 transition-colors">
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 overflow-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
