import React from 'react';
import styles from './index.less';
const Tags: React.FC = () => {
  const tags: any = [
    {
      title: '111',
    },
    {
      title: '111',
    },
    {
      title: '111',
    },
    {
      title: '111',
    },
    {
      title: '111',
    },
    {
      title: '111',
    },
    {
      title: '111',
    },
  ];
  return (
    <div className={styles.tagsWrap}>
      <div className={styles.tagsList}>
        <ul>
          {tags.map((item: any) => {
            return <li className={styles.itemCard}>{item.title}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Tags;
