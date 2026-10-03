import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppButton from '../common/WhatsAppButton';

const Layout = ({ children }) => {
  const { pathname } = useLocation();
  const isHomePage = pathname === '/';

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', width: '100%', backgroundColor: 'var(--bg-primary)' }}>
      <Navbar />
      
      {/* 
        Main page content area:
        Zero padding on home page so the hero video extends all the way to the top edge (no white gap above navbar).
        Other pages retain header height padding so their content is not hidden behind the fixed navbar.
      */}
      <main style={{ flex: 1, paddingTop: isHomePage ? '0px' : 'var(--header-height)' }}>
        {children}
      </main>

      <Footer />
      
      {/* Floating WhatsApp Action Button */}
      <WhatsAppButton variant="floating" />
    </div>
  );
};

export default Layout;
