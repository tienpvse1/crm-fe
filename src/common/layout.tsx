import { LayoutProps, Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import { MenuNavigator } from '../components/layout/main-menu';
import { useToggle } from '../hooks/useToggle';
import { ContentApp } from './app-content';

const { Sider } = Layout;

export const LayoutApp: React.FC<LayoutProps> = () => {

  const [collapsed, onCollapse] = useToggle();

  return (
    <Layout  style={{ minHeight: '100vh' }}>
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

      <ContentApp >
        <Outlet />
      </ContentApp>

    </Layout>
  );
};
