import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Back from '@/components/BackToTop';
import Search from '@/components/Search';
import styles from './index.less';
interface AppProps {
  children: React.ReactNode;
}
const Layout: React.FC<AppProps> = ({ children }) => {
  const [searchVisible, setSearchVisible] = useState<boolean>(false);
  return (
    <>
      <Header setSearchVisible={setSearchVisible} />
      <main className={styles.main}>{children}</main>
      <Back />
      <Search visible={searchVisible} setVisible={setSearchVisible} />
      <Footer />
    </>
  );
};

export default Layout;
