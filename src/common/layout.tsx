import { TOKEN } from '@constance/cookie';
import { getCookies } from '@cookies';
import { LayoutProps, Layout } from 'antd';
import { Navigate, Outlet } from 'react-router-dom';
import { MenuNavigator } from '../components/layout/main-menu';
import { useToggle } from '../hooks/useToggle';
import { ContentApp } from './app-content';

const { Sider } = Layout;

export const LayoutApp: React.FC<LayoutProps> = () => {
  const [collapsed, onCollapse] = useToggle();
  const token = getCookies(TOKEN);
  // if (!token[0]) return <Navigate to={'/login'} />;
  // // @ts-ignore
  // if (!token[0].token) return <Navigate to={'/login'} />;
  
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        className='layout-sider'
        trigger={null}
        theme='light'
        width={250}
        collapsible
        collapsed={collapsed}
      >
        <MenuNavigator onCollapse={onCollapse} collapsed={collapsed} />
      </Sider>

      <ContentApp>
        <Outlet />
      </ContentApp>
    </Layout>
  );
};
