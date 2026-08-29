import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppButton from '../common/WhatsAppButton';

const Layout = ({ children }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', width: '100%', backgroundColor: 'var(--bg-primary)' }}>
      <Navbar />
      
      {/* Main page content area */}
      <main style={{ flex: 1, paddingTop: 'var(--header-height)' }}>
        {children}
      </main>

      <Footer />
      
      {/* Floating WhatsApp Action Button */}
      <WhatsAppButton variant="floating" />
    </div>
  );
};

export default Layout;
