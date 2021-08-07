import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import styles from './index.less';
import { config as RouteConfig } from '@/router/index';
import classnames from 'classnames/bind';
import { routeConfigType } from '@/typings/Menu';

const cx = classnames.bind(styles);

interface MenusProps {
  collapse: boolean;
  setCollapse: any;
}
const Menus: React.FC<MenusProps> = ({ collapse, setCollapse }) => {
  const history = useHistory();
  const location = useLocation();
  function handleClick(item: routeConfigType) {
    history.push(item.path);
    setCollapse(true);
  }
  return (
    <nav className={cx('navWrap', { show: !collapse })}>
      <ul className={styles.navList}>
        {RouteConfig.map((item, index) => {
          return (
            <li key={index} className={cx('nav-item', { active: location.pathname === item.path })}>
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
