import { TOKEN } from '@constance/cookie';
import { getCookies } from '@cookies';
import { LayoutProps, Layout } from 'antd';
import { Navigate, Outlet } from 'react-router-dom';
import { ContentApp } from './app-content';
import { SiderApp } from './sider';


export const LayoutApp: React.FC<LayoutProps> = () => {

  const token = getCookies(TOKEN);
  if (!token[0]) return <Navigate to={'/login'} />;
  // @ts-ignore
  if (!token[0].token) return <Navigate to={'/login'} />;

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <SiderApp />

      <ContentApp>
        <Outlet />
      </ContentApp>
    </Layout>
  );
};
