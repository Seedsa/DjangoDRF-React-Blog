import React from 'react';
import { ArticleType } from '@/typings/Home';
import IconFont from '@/components/IconFont';
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
      title: '??????1',
      desc: '23232',
      date: '2021-08-07',
    },
    {
      title: '??????1',
      desc: '23232',
      date: '2021-08-07',
    },
    {
      title: '??????1',
      desc: '23232',
      date: '2021-08-07',
    },
    {
      title: '??????1',
      desc: '23232',
      date: '2021-08-07',
    },
    {
      title: '??????1',
      desc: '23232',
      date: '2021-08-07',
    },
    {
      title: '??????1',
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
                <div className={styles.meta}>
                  <span className={styles.tags}>React</span>
                  <span className={styles.date}> {item.date}</span>
                  <span className={styles.viewer}>
                    <IconFont type="icon-eye" />
                    2000
                  </span>
                  <span className={styles.tag}>sddsdsd</span>
                </div>
              </li>
            );
          })}
        </ul>
        <div className={styles.right}>
          <p>?????????</p>
          Saima is a Ghost theme with high focus on typography and reading experience. It's sleek
          and clutter free UI design will encourage your visitors to stay and read on your site
          longer. This theme is perfect for a personal and professional blog. Also this theme can be
          used in any collaborative and multi author blog. For example travel blog, technology blog,
          lifestyle blog, health blog etc. This theme comes with light and dark mode you can set
          default color mode to dark or light. Also your visitor can choose their preferred mode. Do
          you write programming / coding related article or tutorial? this theme already comes with
          code syntax highlighter. It also let your user copy by a single click of a button. are not
          all these features amazing?
        </div>
      </div>
    </section>
  );
};

export default Home;
