import { Avatar, Dropdown } from 'antd'
import { MenuProfile } from './dropdown/dropdown-profile'

export const DropdownProfile = () => {
    return (
        <Dropdown overlay={<MenuProfile />}>
            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                <Avatar src='https://joeschmoe.io/api/v1/random'
                    size={30} icon="user" style={{ marginBottom: '8px' }} />
                <span style={{ fontSize: '16px', color: 'black', paddingLeft: '12px', color: 'rgba(0,0,0,0.8)' }}>Tokuda</span>
            </a>
        </Dropdown>
    )
}
