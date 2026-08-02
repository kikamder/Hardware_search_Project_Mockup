import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Role } from './types';

export type View =
  | 'ROLE_SELECT'
  | 'CUSTOMER_HOME'
  | 'CUSTOMER_SELECT_HARDWARE'
  | 'CUSTOMER_FIND_STORE'
  | 'CUSTOMER_SAVED_STORES'
  | 'CUSTOMER_SAVED_DEVICES'
  | 'CUSTOMER_STORE_PRODUCTS'
  | 'CUSTOMER_STORE_REGISTER'
  | 'STORE_DASHBOARD'
  | 'STORE_PRODUCTS'
  | 'STORE_INFO'
  | 'STORE_LOCATION'
  | 'ADMIN_USERS'
  | 'ADMIN_STORES';

interface AppContextType {
  role: Role;
  setRole: (role: Role) => void;
  currentView: View;
  navigate: (view: View) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  selectedHardwareIds: string[];
  setSelectedHardwareIds: (ids: string[] | ((prev: string[]) => string[])) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [role, setRole] = useState<Role>(null);
  const [currentView, setCurrentView] = useState<View>('ROLE_SELECT');
  const [selectedCategory, setSelectedCategory] = useState<string>('VGA');
  const [selectedHardwareIds, setSelectedHardwareIds] = useState<string[]>([]);

  const navigate = (view: View) => {
    setCurrentView(view);
  };

  return (
    <AppContext.Provider
      value={{
        role,
        setRole,
        currentView,
        navigate,
        selectedCategory,
        setSelectedCategory,
        selectedHardwareIds,
        setSelectedHardwareIds,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
}
