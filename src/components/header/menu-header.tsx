import { QuestionCircleOutlined } from '@ant-design/icons'
import { Menu, Space } from 'antd'
import { DropdownNotify } from './menu-notify'
import { DropdownProfile } from './menu-profile'
const state = {
	current: 'mail',
};
export const MenuHeader = () => {
	const { current } = state;
	return (
		<Menu selectedKeys={[current]} mode="horizontal">
			<Space size={'small'}>
				<Menu.Item>
					<QuestionCircleOutlined style={{ fontSize: '20px', color: 'rgba(0,0,0,0.8)' }} />
				</Menu.Item>

				<Menu.Item >
					<DropdownNotify />
				</Menu.Item>

				<Menu.Item >
					<DropdownProfile />
				</Menu.Item>

			</Space>
		</Menu>
	)
}
