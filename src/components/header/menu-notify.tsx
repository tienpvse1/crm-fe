import { BellOutlined } from '@ant-design/icons';
import { Badge, Dropdown } from 'antd';
import 'antd/dist/antd.css';
import { DropdownContent } from './dropdown';

export const DropdownNotify = () => {
	return (
		<Dropdown overlay={<DropdownContent />} trigger={['click']} placement='bottomRight' destroyPopupOnHide>
			<a onClick={e => e.preventDefault()}>
				<Badge count={5}>
					<BellOutlined style={{ fontSize: '16px', color: 'black' }} />
				</Badge>
			</a>
		</Dropdown>
	)
}
