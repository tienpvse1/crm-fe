import { PlusOutlined } from "@ant-design/icons"
import { Menu } from "antd"

interface Menu_2_Props {
    style: object
}

export const Menu_2 = ({ style }: Menu_2_Props) => {
    return (
        <>
            <Menu       
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode='inline'
            >
                <Menu.Item
                    key='integration'
                    style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                        color: 'rgba(0,0,0,0.6)',
                    }}
                >
                    Integrations
                </Menu.Item>
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
            </Menu>
        </>
    )
}
