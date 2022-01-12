import { LogoutOutlined, SettingOutlined, UserOutlined } from "@ant-design/icons"
import { Menu } from "antd"

export const MenuProfile = () => {
    return (
        <Menu style={{ marginTop: '20px', borderRadius: '10px' }}>
            <Menu.Item key="profile">
                <a target="_blank" href="/">
                    <UserOutlined style={{ color: 'rgba(0,0,0,0.8)' }} />
                    <span style={{ fontSize: '16px', color: 'rgba(0,0,0,0.8)' }}>My profile</span>
                </a>
            </Menu.Item>
            <Menu.Item key="setting">
                <a target="_blank" href="/">
                    <SettingOutlined style={{ color: 'rgba(0,0,0,0.8)' }} />
                    <span style={{ fontSize: '16px', color: 'rgba(0,0,0,0.8)' }}>Settings</span>
                </a>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key="logout">
                <a target="_blank" href="/login">
                    <LogoutOutlined style={{ color: 'rgba(0,0,0,0.8)' }} />
                    <span style={{ fontSize: '16px', color: 'rgba(0,0,0,0.8)' }}>Log out</span>
                </a>
            </Menu.Item>
        </Menu>
    )
}
