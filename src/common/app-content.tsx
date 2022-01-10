import { Breadcrumb, Layout } from 'antd'
import { FooterApp } from './footer';
const { Content } = Layout;

export const ContentApp: React.FC = ({ children }) => {
    return (
        <Layout className="site-layout">
            {/* Put Header App here  */}
            {/* <Header className="site-layout-background" style={{ padding: 0 }} /> */}

            {/* Content */}
            <Content style={{ margin: '0 16px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>User</Breadcrumb.Item>
                    <Breadcrumb.Item>Bill</Breadcrumb.Item>
                </Breadcrumb>
                <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                    {children}
                </div>
            </Content>

            {/* Footer */}
            <FooterApp />
        </Layout>
    )
}