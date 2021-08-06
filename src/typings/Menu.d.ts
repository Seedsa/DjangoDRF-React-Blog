export type routeConfigType = {
  name: string;
  path: string;
  exact: boolean;
  component: React.ReactNode;
  key?: string;
};
