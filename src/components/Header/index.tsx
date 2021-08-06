import React from 'react';
import styles from './index.less';
import Menus from '../Menu';
const Header: React.FC = () => {
  return (
    <>
      <header style={{ height: '48px', background: 'transparent' }} />
      <header className={styles.header}>
        <div className={styles.container}>
          <div>一粒小种子</div>
          <Menus />
        </div>
      </header>
    </>
  );
};

export default Header;
