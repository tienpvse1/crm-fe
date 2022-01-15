import { LogoutOutlined, SettingOutlined, UserOutlined } from "@ant-design/icons"
import { Menu } from "antd"

export const MenuProfile = () => {
    return (
        <Menu style={{
            marginTop: '20px',
            borderRadius: '3px',
            boxShadow: '0px 3px 3px 3px rgba(0, 0, 0, 0.15)'
        }}>
            <Menu.Item className="items-dropdown-profile" key="profile">
                <a target="_blank" href="/">
                    <UserOutlined style={{ color: 'rgba(0,0,0,0.8)' }} />
                    <span className="items-dropdown-span">My profile</span>
                </a>
            </Menu.Item>
            <Menu.Item className="items-dropdown-profile" key="setting">
                <a target="_blank" href="/">
                    <SettingOutlined style={{ color: 'rgba(0,0,0,0.8)' }} />
                    <span className="items-dropdown-span">Settings</span>
                </a>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item className="items-dropdown-profile" key="logout">
                <a target="_blank" href="/login">
                    <LogoutOutlined style={{ color: 'rgba(0,0,0,0.8)' }} />
                    <span className="items-dropdown-span">Log out</span>
                </a>
            </Menu.Item>
        </Menu>
    )
}
