import { LayoutProps } from 'antd';
import { Outlet } from 'react-router-dom';
import { MenuNavigator } from '../components/layout/menu';

export const Layout: React.FC<LayoutProps> = () => {
  return (
    <div
      style={{
        display: 'flex',
      }}
    >
      <MenuNavigator />
      <Outlet />
    </div>
  );
};
