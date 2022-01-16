import { QuestionCircleOutlined } from '@ant-design/icons';
import { Menu, Space } from 'antd';
import { DropdownNotify } from './menu-notify';
import { DropdownProfile } from './menu-profile';
const state = {
  current: 'mail',
};
export const MenuHeader = () => {
  const { current } = state;
  return (
    <Space size={'small'}>
      <Menu selectedKeys={[current]} mode='horizontal'>
        <Menu.Item
          key='question'
          icon={
            <QuestionCircleOutlined
              style={{ fontSize: '20px', color: 'rgba(0,0,0,0.8)' }}
            />
          }
        ></Menu.Item>

        <Menu.Item key={'message'}>
          <DropdownNotify />
        </Menu.Item>

        <Menu.Item key={'profile'}>
          <DropdownProfile />
        </Menu.Item>
      </Menu>
    </Space>
  );
};
