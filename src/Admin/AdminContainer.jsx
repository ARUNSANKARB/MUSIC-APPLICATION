import React from 'react'
import AdminSidebar from './AdminSidebar'
import AdminContent from './AdminContent'

const AdminContainer = () => {
  return (
    <section className="w-screen flex">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Content */}
      <AdminContent />
    </section>
  );
};

export default AdminContainer;
