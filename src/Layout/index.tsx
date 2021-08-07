import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Back from '@/components/BackToTop';
import styles from './index.less';
interface AppProps {
  children: React.ReactNode;
}
const Layout: React.FC<AppProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
      <Back />
      <Footer />
    </>
  );
};

export default Layout;
