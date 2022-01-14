import { Menu, Tabs } from "antd"
import { ListMessage } from "../list/list-message";
import { ListNotify } from "../list/list-notify";
import { ListToDo } from "../list/list-todo";

const { TabPane } = Tabs;


export const DropdownContent = () => {
    return (
        <Menu
            style={{
                padding: '0 20px 20px 20px',
                marginTop: '21px ',
                width: '325px',
                borderRadius: '3px',
                boxShadow: '0px 3px 3px 3px rgba(0, 0, 0, 0.15)'
            }}>
            <Tabs defaultActiveKey="1" centered>
                <TabPane tab={
                    <span>
                        Notice(4)
                    </span>
                }
                    key="1"
                >
                    <ListNotify />
                </TabPane>
                <TabPane tab={
                    <span>
                        Message(3)
                    </span>
                }
                    key="2"
                >
                    <ListMessage />
                </TabPane>
                <TabPane tab={
                    <span>
                        To do(4)
                    </span>
                }
                    key="3"
                >
                    <ListToDo />
                </TabPane>
            </Tabs>
        </Menu>
    )
}
