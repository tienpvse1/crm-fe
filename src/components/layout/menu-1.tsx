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
  CodeSandboxOutlined,
} from '@ant-design/icons';
import { LogoSider } from './logo-sider';

interface Menu1Props {
  onCollapse: () => void;
  style: object;
  collapsed: boolean;
}

export const Menu1 = ({ onCollapse, style, collapsed }: Menu1Props) => {
  return (
    <>

      <LogoSider onCollapse={onCollapse} collapsed={collapsed} />
      <Menu
        defaultOpenKeys={['sub1']}
        defaultSelectedKeys={['home']}
        mode='inline'
      >
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
            icon={<img
              src={'/slack.png'}
              height={20}
              width={20}
              style={{
                marginRight: 10,
              }}
            />}
            key='slack'
            style={style}>
            {' '}
            Slack
          </Menu.Item>

          <Menu.Item
            icon={<img
              src={'/notion.png'}
              height={20}
              width={20}
              style={{
                marginRight: 10,
              }}
            />}
            key='notion'
            style={style}>

            Notion
          </Menu.Item>
          <Menu.Item
            icon={<img
              src={'/google-drive.png'}
              height={20}
              width={20}
              style={{
                marginRight: 10,
              }}
            />}
            key='googleDrive'
            style={style}>

            Google drive
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
  )
}
