import { MenuNavigator } from '@components/layout/sider/main-menu'
import { useToggle } from '@hooks/useToggle';
import { Layout } from 'antd';
const { Sider } = Layout;

export const SiderApp = () => {

  const [collapsed, onCollapse] = useToggle();

  return (
    <Sider
      className='layout-sider'
      trigger={null}
      theme='light'
      width={250}
      collapsible
      collapsed={collapsed}
    >
      <MenuNavigator onCollapse={onCollapse} collapsed={collapsed} />
    </Sider>
  )
}
