import React from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';

import { AiOutlineWhatsApp } from 'react-icons/ai';

const Layout = ( { children }) => {
  return (
    <div className="layout">
      <Head>
        <title> AIR BACKSTAGE </title>
      </Head>

      <header>
        <Navbar />
      </header>

      <main className="main-container">
        {children}

        <a href="https://api.whatsapp.com/send?phone=51926585479&text=Hola, me gustaria Obtener más información acerca de los productos..." 
            className="float pulse" 
            target="_blank">
        <p className="my-float pulse">
          <AiOutlineWhatsApp />
        </p>
  </a>
      </main>

      <footer>  
        <Footer />
      </footer>
    </div>
  );
}

export default Layout