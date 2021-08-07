import React, { useState, useEffect } from 'react';
import styles from './index.less';
import IconFont from '@/components/IconFont';
import cs from 'classnames';
import Menus from '../Menu';
const Header: React.FC = () => {
  const [theme, setTheme] = useState('light');
  const [visible, setVisible] = useState<boolean>(true);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scroll, setScroll] = useState(0);
  function handleTheme() {
    if (document.documentElement.dataset.theme === 'light') {
      document.documentElement.dataset.theme = 'dark';
      setTheme('dark');
    } else {
      document.documentElement.dataset.theme = 'light';
      setTheme('light');
    }
  }
  let scrollTop = 0;
  let topValue = 0;
  const getScollTop = () => {
    let scrollTop = 0;
    if (document?.documentElement && document?.documentElement?.scrollTop) {
      scrollTop = document?.documentElement.scrollTop;
    } else if (document?.body) {
      scrollTop = document?.body.scrollTop;
    }
    return scrollTop;
  };

  const bindHandleScroll = () => {
    scrollTop = getScollTop();
    setScroll(scrollTop);
    if (scrollTop <= topValue) {
      setVisible(true);
    } else {
      setVisible(false);
      setMobileMenu(false);
    }
    setTimeout(function () {
      topValue = scrollTop;
    }, 0);
  };
  useEffect(() => {
    window.addEventListener('scroll', bindHandleScroll);
    return () => {
      window.removeEventListener('scroll', bindHandleScroll);
    };
  }, []);
  return (
    <>
      <header className={styles.headerFade} />
      <header className={cs(styles.header, !visible && styles.hide, scroll !== 0 && styles.fixed)}>
        <div className={styles.container}>
          <div className={styles.title}>Litle Seed</div>
          <div className={styles.headerRight}>
            <Menus mobileMenu={mobileMenu} />
            <IconFont onClick={handleTheme} type={theme === 'light' ? '#icon-moon' : '#icon-sun'} />
            <IconFont
              type="#icon-menu3"
              onClick={() => {
                setMobileMenu(!mobileMenu);
              }}
            />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
