import { Layout } from 'antd';
import { MenuHeader } from '../components/header/menu-header';
const { Header } = Layout;



export const HeaderApp = () => {
    return (
        <Header className="site-layout-background" style={{
            display: 'flex',
            backgroundColor: 'white',
            height: '48px'
        }}>
            <div style={{ flex: '1 1 0%' }}></div>
            <div>
                <MenuHeader />
            </div>
        </Header>
    )
}
