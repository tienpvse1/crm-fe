import {
  BranchesOutlined,
  CalendarOutlined,
  CodeSandboxOutlined,
  ContactsOutlined,
  HomeOutlined,
  PlusOutlined,
  StockOutlined,
  UserOutlined,
  WalletOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import { LogoSider } from './logo-sider';

interface Menu1Props {
  onCollapse: () => void;
  style: object;
  collapsed: boolean;
}

export const Menu1 = ({ onCollapse, style, collapsed }: Menu1Props) => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <>
      <LogoSider onCollapse={onCollapse} collapsed={collapsed} />
      <Menu
        defaultOpenKeys={['sub1']}
        // @ts-ignore
        selectedKeys={location.pathname.split('/')[1]}
        mode='inline'
      >
        <Menu.Item
          key='home'
          style={style}
          onClick={() => navigate('/')}
          icon={<HomeOutlined style={style} />}
        >
          Home
        </Menu.Item>

        <Menu.Item
          key='contact'
          onClick={() => navigate('/contact')}
          style={style}
          icon={<ContactsOutlined style={style} />}
        >
          Contact
        </Menu.Item>
        <Menu.Item
          key='pipeline'
          onClick={() => navigate('/pipeline')}
          style={style}
          icon={<BranchesOutlined style={style} />}
        >
          Pipeline
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

        {/* ----------------------------------------------------------- */}

        <Menu.SubMenu
          key={'sub1'}
          title={
            <div
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: 'rgba(0,0,0,0.6)',
              }}
            >
              Integrations
            </div>
          }
          icon={<CodeSandboxOutlined style={style} />}
        >
          <Menu.Item
            icon={
              <img
                src={'/slack.png'}
                height={20}
                width={20}
                style={{
                  marginRight: 10,
                }}
              />
            }
            key='slack'
            style={style}
          >
            {' '}
            Slack
          </Menu.Item>

          <Menu.Item
            icon={
              <img
                src={'/notion.png'}
                height={20}
                width={20}
                style={{
                  marginRight: 10,
                }}
              />
            }
            key='notion'
            style={style}
          >
            Notion
          </Menu.Item>
          <Menu.Item
            icon={
              <img
                src={'/google-drive.png'}
                height={20}
                width={20}
                style={{
                  marginRight: 10,
                }}
              />
            }
            key='googleDrive'
            style={style}
          >
            Google drive
          </Menu.Item>
          <Menu.Item
            icon={
              <img
                src={'https://cdn-icons-png.flaticon.com/512/732/732200.png'}
                height={20}
                width={20}
                style={{
                  marginRight: 10,
                }}
              />
            }
            onClick={() => navigate('/email')}
            key='email'
            style={style}
          >
            Gmail
          </Menu.Item>
          <Menu.Item
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
          </Menu.Item>
        </Menu.SubMenu>
      </Menu>
    </>
  );
};
