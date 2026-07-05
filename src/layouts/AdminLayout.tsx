import React from 'react';
import { Home, Users, Store, LogOut, User } from 'lucide-react';
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
        <div className="h-16 flex items-center px-6 border-b border-slate-100">
          <div className="flex items-center text-blue-600 font-bold text-xl cursor-pointer" onClick={() => navigate('ADMIN_DASHBOARD')}>
            <Home className="w-6 h-6 mr-2" />
            PC FINDER
          </div>
        </div>
        <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
          <button
            onClick={() => navigate('ADMIN_DASHBOARD')}
            className={`w-full flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-all ${
              currentView === 'ADMIN_DASHBOARD' ? 'bg-blue-50 text-blue-700' : 'text-slate-600 hover:bg-white/50'
            }`}
          >
            <Home className="w-5 h-5 mr-3" />
            Dashboard
          </button>
          <button
            className="w-full flex items-center px-3 py-2.5 text-sm font-medium rounded-lg text-slate-600 hover:bg-white/50 transition-all"
          >
            <Users className="w-5 h-5 mr-3" />
            จัดการผู้ใช้งาน
          </button>
          <button
            className="w-full flex items-center px-3 py-2.5 text-sm font-medium rounded-lg text-slate-600 hover:bg-white/50 transition-all"
          >
            <Store className="w-5 h-5 mr-3" />
            จัดการร้านค้า
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
        <header className="h-16 bg-transparent flex items-center justify-end px-6 z-10">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center">
            <User className="w-4 h-4 mr-2" />
            Admin
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
