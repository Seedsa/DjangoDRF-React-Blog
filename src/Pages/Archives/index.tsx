import React from 'react';
import styles from './index.less';

const Archives: React.FC = () => {
  return (
    <div className={styles.archivesWrap}>
      <div className={styles.innerWrap}>
        <div className={styles.title}>
          <h1>归档</h1>
        </div>
        <div className={styles.archivesList}>
          <ul>
            <li>
              <div className={styles.py}>2021</div>
              <article className={styles.post}>
                <div className={styles.inner}>
                  <div className={styles.date}>2021/8/7</div>
                  <h2>
                    <a>Autumn is a second spring when every leaf is a flower</a>
                  </h2>
                </div>
              </article>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Archives;
