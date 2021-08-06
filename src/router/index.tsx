import React from 'react';
import Home from '@/Pages/Home';
import Tags from '@/Pages/Tags';
import About from '@/Pages/About';
import Archives from '@/Pages/Archives';
import Layout from '../Layout';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { routeConfigType } from '@/typings/Menu';
import { createBrowserHistory } from 'history';

const customHistory: any = createBrowserHistory();

export const config: routeConfigType[] = [
  {
    name: '首页',
    path: '/',
    exact: true,
    component: <Home />,
  },
  {
    name: '标签',
    path: '/tags',
    exact: true,
    component: <Tags />,
  },
  {
    name: '归档',
    path: '/archives',
    exact: true,
    component: <Archives />,
  },
  {
    name: '关于',
    path: '/about',
    exact: true,
    component: <About />,
  },
];

function RoutesMap(props: any) {
  return (
    <Router history={customHistory}>
      <Layout>
        <Switch>
          {config.map((item, index) => {
            return (
              <Route key={item.key || index} exact={item.exact} path={item.path}>
                {item.component}
              </Route>
            );
          })}
        </Switch>
      </Layout>
    </Router>
  );
}

export default RoutesMap;
