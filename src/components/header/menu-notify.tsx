import { BellOutlined } from '@ant-design/icons';
import { Badge, Dropdown } from 'antd';
import 'antd/dist/antd.css';
import { DropdownContent } from './dropdown/dropdown-notify';

export const DropdownNotify = () => {
  return (
    <Dropdown
      overlay={<DropdownContent />}
      trigger={['click']}
      placement='bottomRight'
      destroyPopupOnHide
    >
      <Badge count={5}>
        <BellOutlined style={{ fontSize: '20px', color: 'rgba(0,0,0,0.8)' }} />
      </Badge>
    </Dropdown>
  );
};
