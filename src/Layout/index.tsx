import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from './index.less';
interface AppProps {
  children: React.ReactNode;
}
const Layout: React.FC<AppProps> = ({ children }) => {
  return (
    <section>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </section>
  );
};

export default Layout;
