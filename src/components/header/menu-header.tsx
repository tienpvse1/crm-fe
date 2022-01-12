import { LogoutOutlined, QuestionCircleOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons'
import { Menu, Space } from 'antd'
import Avatar from 'antd/lib/avatar/avatar'
import MenuDivider from 'antd/lib/menu/MenuDivider'
import SubMenu from 'antd/lib/menu/SubMenu'
import { DropdownNotify } from './menu-notify'
const state = {
	current: 'mail',
};
export const MenuHeader = () => {
	const { current } = state;
	return (
		<Menu selectedKeys={[current]} mode="horizontal" style={{
			lineHeight: '48px',
		}}>
			<Space size={'small'}>
				<Menu.Item>
					<QuestionCircleOutlined style={{ fontSize: '16px', color: 'black' }} />
				</Menu.Item>

				<Menu.Item >
					<DropdownNotify />
				</Menu.Item>

				<SubMenu key="SubMenu" icon={<Avatar src='https://joeschmoe.io/api/v1/random'
					size={28} icon="user" />} title={
						<span style={{ fontSize: '16px', color: 'black', paddingLeft: '12px' }}>Tokuda</span>}>
					<Menu.Item key="profile" icon={<UserOutlined />}>My profile</Menu.Item>
					<Menu.Item key="setting" icon={<SettingOutlined />}>Settings</Menu.Item>
					<MenuDivider />
					<Menu.Item key="logout" icon={<LogoutOutlined />}>Log out</Menu.Item>
				</SubMenu>
			</Space>
		</Menu>
	)
}
