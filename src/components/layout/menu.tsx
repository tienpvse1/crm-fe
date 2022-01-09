import { Menu } from 'antd';
import {
  HomeOutlined,
  SolutionOutlined,
  StockOutlined,
  TagsOutlined,
  WalletOutlined,
  UserOutlined,
  CalendarOutlined,
  PlusOutlined,
  MenuOutlined,
} from '@ant-design/icons';
const { Item } = Menu;
const style = {
  fontSize: 18,
};
export const MenuNavigator = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Menu
        style={{ width: 256, height: '60vh' }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode='inline'
      >
        <Item
          key='crmp'
          style={{
            height: '80px',
            fontSize: 24,
            fontWeight: 'bold',
            color: 'rgba(0,0,0,0.6)',
          }}
        >
          <MenuOutlined
            style={{
              fontSize: 20,
            }}
          />
          <img
            src='/crm.png'
            height={40}
            width={40}
            style={{
              marginLeft: 30,
              marginRight: '10px',
            }}
          />{' '}
          CRM<span style={{ color: '#4d83e0' }}>P</span>
        </Item>
        <Item key='home' style={style} icon={<HomeOutlined style={style} />}>
          Home
        </Item>
        <Item
          key='analytic'
          style={style}
          icon={<StockOutlined style={style} />}
        >
          Analytic
        </Item>
        <Item key='product' style={style} icon={<TagsOutlined style={style} />}>
          Product
        </Item>
        <Item
          key='order'
          style={style}
          icon={<SolutionOutlined style={style} />}
        >
          Order
        </Item>
        <Item
          key='payment'
          style={style}
          icon={<WalletOutlined style={style} />}
        >
          Payment
        </Item>
        <Item
          key='customer'
          style={style}
          icon={<UserOutlined style={style} />}
        >
          Customer
        </Item>
        <Item
          key='schedule'
          style={style}
          icon={<CalendarOutlined style={style} />}
        >
          Schedule
        </Item>
      </Menu>

      {/* menu 2 */}
      <Menu
        style={{
          width: 256,
          height: '40vh',
          borderTop: '1px solid rgba(0,0,0,0.05)',
        }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode='inline'
      >
        <Item
          key='integration'
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: 'rgba(0,0,0,0.6)',
          }}
        >
          Integrations
        </Item>
        <Item key='slack' style={style}>
          <img
            src={'/slack.png'}
            height={20}
            width={20}
            style={{
              marginRight: 10,
            }}
          />{' '}
          Slack
        </Item>
        <Item key='notion' style={style}>
          <img
            src={'/notion.png'}
            height={20}
            width={20}
            style={{
              marginRight: 10,
            }}
          />
          Notion
        </Item>
        <Item key='googleDrive' style={style}>
          <img
            src={'/google-drive.png'}
            height={20}
            width={20}
            style={{
              marginRight: 10,
            }}
          />
          Google drive
        </Item>
        <Item
          key='add'
          icon={
            <PlusOutlined
              width={20}
              style={{
                marginRight: 8,
              }}
            />
          }
          style={style}
        >
          Add plugin
        </Item>
      </Menu>
    </div>
  );
};
