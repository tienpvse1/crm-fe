import {
  LogoutOutlined,
  SettingOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { TOKEN } from '@constance/cookie';
import { removeCookie } from '@cookies';
import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';

export const MenuProfile = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    removeCookie(TOKEN);
    navigate('/login');
  };
  return (
    <Menu className='items-dropdown-profile'>
      <Menu.Item key='profile'>
        <>
          <UserOutlined style={{ color: 'rgba(0,0,0,0.8)' }} />
          <span style={{ fontSize: '16px', color: 'rgba(0,0,0,0.8)' }}>
            My profile
          </span>
        </>
      </Menu.Item>
      <Menu.Item key='setting'>
        <>
          <SettingOutlined style={{ color: 'rgba(0,0,0,0.8)' }} />
          <span style={{ fontSize: '16px', color: 'rgba(0,0,0,0.8)' }}>
            Settings
          </span>
        </>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key='logout' onClick={handleLogout}>
        <LogoutOutlined style={{ color: 'rgba(0,0,0,0.8)' }} />
        <span style={{ fontSize: '16px', color: 'rgba(0,0,0,0.8)' }}>
          Log out
        </span>
      </Menu.Item>
    </Menu>
  );
};
