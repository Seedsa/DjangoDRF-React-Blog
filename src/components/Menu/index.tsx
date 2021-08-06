import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import styles from './index.less';
import { config as RouteConfig } from '@/router/index';
import { routeConfigType } from '@/typings/Menu';
const Menus: React.FC = () => {
  const history = useHistory();
  function handleClick(item: routeConfigType) {
    history.push(item.path);
  }
  return (
    <nav className={styles.nav}>
      <ul>
        {RouteConfig.map((item, index) => {
          return (
            <li key={item.key || index}>
              <a
                onClick={() => {
                  handleClick(item);
                }}
              >
                {item.name}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Menus;
