import React from 'react';
import styles from './index.less';
const Details = () => {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.innerWrap}>
          <div>
            <div className={styles.title}>
              <h1>标题sad撒按时</h1>
            </div>
            <div className={styles.postInfo}>
              <span className={styles.tags}>React</span>
              <span className={styles.date}> 2019-2-2</span>
              <span className={styles.viewer}>2000</span>
              <span className={styles.tag}>sddsdsd</span>
            </div>
            <article>
              <p>
                在 nodejs
                中，之前一直推荐的是url.parse方法来解析参数，不过这个方法已经不推荐了，现在推荐的是
                WHATWG 网址的 API。
              </p>
              <p>
                因为网上找到的都还是之前的方法，这里特此记录下，在 nodejs 中，如何使用 URL 类 或
                URLSearchParams 类来获取请求的参数。
              </p>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
