import { TOKEN } from '@constance/cookie';
import { getCookies } from '@cookies';
import { Layout } from 'antd';
import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { ContentApp } from './app-content';
import { SiderApp } from './sider';

interface LayoutAppProps {
  content: ReactNode;
  menuSider: ReactNode;
}

export const LayoutApp = ({ content, menuSider }: LayoutAppProps) => {

  const token = getCookies(TOKEN);
  if (!token[0]) return <Navigate to={'/login'} />;
  // @ts-ignore
  if (!token[0].token) return <Navigate to={'/login'} />;

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <SiderApp>
        {menuSider}
      </SiderApp>

      <ContentApp>
        {content}
      </ContentApp>
    </Layout>
  );
};
