import React from 'react';
import { AppProvider, useAppContext } from './AppContext';
import RoleSelect from './pages/RoleSelect';

// Customer
import CustomerLayout from './layouts/CustomerLayout';
import Home from './pages/customer/Home';
import SelectHardware from './pages/customer/SelectHardware';
import FindStore from './pages/customer/FindStore';
import SavedStores from './pages/customer/SavedStores';
import SavedDevices from './pages/customer/SavedDevices';
import StoreProducts from './pages/customer/StoreProducts';
import StoreRegistration from './pages/customer/StoreRegistration';

// Store
import StoreLayout from './layouts/StoreLayout';
import StoreDashboard from './pages/store/StoreDashboard';
import ProductManagement from './pages/store/ProductManagement';
import InfoManagement from './pages/store/InfoManagement';
import LocationManagement from './pages/store/LocationManagement';

// Admin
import AdminLayout from './layouts/AdminLayout';
import AdminUsers from './pages/admin/AdminUsers';
import AdminStores from './pages/admin/AdminStores';

function AppRouter() {
  const { role, currentView } = useAppContext();

  if (currentView === 'ROLE_SELECT' || !role) {
    return <RoleSelect />;
  }

  if (role === 'GUEST' || role === 'USER') {
    return (
      <CustomerLayout>
        {currentView === 'CUSTOMER_HOME' && <Home />}
        {currentView === 'CUSTOMER_SELECT_HARDWARE' && <SelectHardware />}
        {currentView === 'CUSTOMER_FIND_STORE' && <FindStore />}
        {currentView === 'CUSTOMER_SAVED_STORES' && <SavedStores />}
        {currentView === 'CUSTOMER_SAVED_DEVICES' && <SavedDevices />}
        {currentView === 'CUSTOMER_STORE_PRODUCTS' && <StoreProducts />}
        {currentView === 'CUSTOMER_STORE_REGISTER' && <StoreRegistration />}
      </CustomerLayout>
    );
  }

  if (role === 'STORE') {
    return (
      <StoreLayout>
        {currentView === 'STORE_DASHBOARD' && <StoreDashboard />}
        {currentView === 'STORE_PRODUCTS' && <ProductManagement />}
        {currentView === 'STORE_INFO' && <InfoManagement />}
        {currentView === 'STORE_LOCATION' && <LocationManagement />}
      </StoreLayout>
    );
  }

  if (role === 'ADMIN') {
    return (
      <AdminLayout>
        {currentView === 'ADMIN_USERS' && <AdminUsers />}
        {currentView === 'ADMIN_STORES' && <AdminStores />}
      </AdminLayout>
    );
  }

  return <RoleSelect />;
}

export default function App() {
  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  );
}
