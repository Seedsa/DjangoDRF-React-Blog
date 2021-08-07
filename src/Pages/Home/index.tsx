import React from 'react';
import { ArticleType } from '@/typings/Home';
import styles from './index.less';
const Home: React.FC = () => {
  const mockData: ArticleType[] = [
    {
      title: 'Autumn is a second spring when every leaf is a flower',
      desc: 'She then expatiated very warmly upon the advantages I should reap from her plan; talked in a high style of my future grandeur; assured me how heartily I should despise almost every body and every thing I had hitherto seen; predicted my marrying into some family of the',
      date: '2021-08-07',
    },
    {
      title: 'Autumn is a second spring when every leaf is a flower',
      desc: 'She then expatiated very warmly upon the advantages I should reap from her plan; talked in a high style of my future grandeur; assured me how heartily I should despise almost every body and every thing I had hitherto seen; predicted my marrying into some family of the',
      date: '2021-08-07',
    },
    {
      title: 'Autumn is a second spring when every leaf is a flower',
      desc: 'She then expatiated very warmly upon the advantages I should reap from her plan; talked in a high style of my future grandeur; assured me how heartily I should despise almost every body and every thing I had hitherto seen; predicted my marrying into some family of the',
      date: '2021-08-07',
    },
    {
      title: 'Autumn is a second spring when every leaf is a flower',
      desc: 'She then expatiated very warmly upon the advantages I should reap from her plan; talked in a high style of my future grandeur; assured me how heartily I should despise almost every body and every thing I had hitherto seen; predicted my marrying into some family of the',
      date: '2021-08-07',
    },
    {
      title: 'Autumn is a second spring when every leaf is a flower',
      desc: 'She then expatiated very warmly upon the advantages I should reap from her plan; talked in a high style of my future grandeur; assured me how heartily I should despise almost every body and every thing I had hitherto seen; predicted my marrying into some family of the',
      date: '2021-08-07',
    },
    {
      title: '标题1',
      desc: '23232',
      date: '2021-08-07',
    },
    {
      title: '标题1',
      desc: '23232',
      date: '2021-08-07',
    },
    {
      title: '标题1',
      desc: '23232',
      date: '2021-08-07',
    },
    {
      title: '标题1',
      desc: '23232',
      date: '2021-08-07',
    },
    {
      title: '标题1',
      desc: '23232',
      date: '2021-08-07',
    },
    {
      title: '标题1',
      desc: '23232',
      date: '2021-08-07',
    },
  ];
  return (
    <section>
      <div className={styles.container}>
        <ul>
          {mockData.map((item, index) => {
            return (
              <li key={index}>
                <h2 className={styles.title}>
                  <a>{item.title}</a>
                </h2>
                <p>{item.desc}</p>
                <div className={styles.meta}>{item.date}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Home;
