import React from 'react';
import styles from './index.less';
const Footer: React.FC = () => {
  return (
    <footer className={styles.footerWrap}>
      <div className={styles.container}>
        <div className={styles.footer}>
          <div className={styles.row}>
            <div className={styles.copyright}>© 2021 | 京ICP备16039464号</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
