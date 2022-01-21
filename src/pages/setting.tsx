import { TabAdditional } from "@components/setting/tab/additional";
import { TabLoginAndSecurity } from "@components/setting/tab/login-security";
import { TabNotification } from "@components/setting/tab/notification";
import { Radio, Tabs } from "antd";

const { TabPane } = Tabs;

export const SettingPage = () => {
	return (
		<div className="setting-container">
			<Tabs defaultActiveKey="1" centered className="tab-header">
				<TabPane tab={<Radio.Button className="custom-button" value={1}>Login & Security</Radio.Button>} key="1">
					<TabLoginAndSecurity />
				</TabPane>
				<TabPane tab={<Radio.Button className="custom-button" value={2}>Notification Settings</Radio.Button>} key="2">
					<TabNotification />
				</TabPane>
				<TabPane tab={<Radio.Button className="custom-button" value={3}>Additional Settings</Radio.Button>} key="3">
					<TabAdditional />
				</TabPane>
			</Tabs>
		</div >
	)
}
