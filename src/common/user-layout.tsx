import { MenuSiderUser } from '@components/layout/menu/user-menu';
import { PUBLIC_USER_INFO } from '@constance/cookie';
import { Role } from '@interfaces/type-roles';
import { LayoutProps } from 'antd';
import { useCookies } from 'react-cookie';
import { Navigate, Outlet } from 'react-router-dom';
import { LayoutApp } from './layout';


export const LayoutUser: React.FC<LayoutProps> = () => {

  const [cookies] = useCookies([PUBLIC_USER_INFO]);

  if (cookies.public_user_info?.role === Role.ADMIN)
    return <Navigate to={'/admin'} />;


  return (
    <LayoutApp
      content={<Outlet />}
      menuSider={<MenuSiderUser style={{ fontSize: 17 }} />}
    />
  );
};
