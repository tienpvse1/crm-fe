import { Menu } from 'antd';
import {
  HomeOutlined,
  SolutionOutlined,
  StockOutlined,
  TagsOutlined,
  WalletOutlined,
  UserOutlined,
  CalendarOutlined,
  MenuOutlined,
} from '@ant-design/icons';

interface Menu_1_Props {
  onCollapse: () => void;
  style: object;
}

export const Menu_1 = ({ onCollapse, style }: Menu_1_Props) => {
  return (
    <>
      <Menu
        defaultSelectedKeys={['home']}
        mode='inline'
      >
        <Menu.Item
          icon={<MenuOutlined
            onClick={onCollapse}
            style={{
              fontSize: 20,
            }}
          />}
          key='crmp'
          style={{
            display: 'flex',
            alignItems: 'center',
            height: '80px',
            fontSize: 24,
            fontWeight: 'bold',
            color: 'rgba(0,0,0,0.6)',
          }}
        >
          <div className='logo'>
            <img
              src='/crm.png'
              height={40}
              width={40}
              style={{
                marginLeft: 20,
                marginRight: '10px',
              }}
            />{' '}
            CRM<span style={{ color: '#4d83e0' }}>P</span>
          </div>

        </Menu.Item>

        <Menu.Item key='home' style={style} icon={<HomeOutlined style={style} />}>
          Home
        </Menu.Item>

        <Menu.Item
          key='analytic'
          style={style}
          icon={<StockOutlined style={style} />}
        >
          Analytic
        </Menu.Item>
        <Menu.Item key='product' style={style} icon={<TagsOutlined style={style} />}>
          Product
        </Menu.Item>
        <Menu.Item
          key='order'
          style={style}
          icon={<SolutionOutlined style={style} />}
        >
          Order
        </Menu.Item>
        <Menu.Item
          key='payment'
          style={style}
          icon={<WalletOutlined style={style} />}
        >
          Payment
        </Menu.Item>
        <Menu.Item
          key='customer'
          style={style}
          icon={<UserOutlined style={style} />}
        >
          Customer
        </Menu.Item>
        <Menu.Item
          key='schedule'
          style={style}
          icon={<CalendarOutlined style={style} />}
        >
          Schedule
        </Menu.Item>
      </Menu>
    </>
  )
}
