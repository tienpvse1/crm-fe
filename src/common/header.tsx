import { MenuHeader } from '@components/header/menu-header';
import { Layout } from 'antd';
const { Header } = Layout;



export const HeaderApp = () => {
    return (
        <Header className="site-layout-background" style={{
            display: 'flex',
            backgroundColor: 'white'
        }}>
            <div style={{ flex: '1 1 0%' }}></div>
            <div>
                <MenuHeader />
            </div>
        </Header>
    )
}
