import { MenuOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';

interface LogoSiderProps {
  onCollapse: () => void;
  collapsed: boolean;
}

export const LogoSider = ({ collapsed, onCollapse }: LogoSiderProps) => {
  return (
    <div className='logo-sider'>
      <MenuOutlined
        onClick={onCollapse}
        style={{
          fontSize: 20,
        }}
      />
      {!collapsed && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <img
            src='/crm.png'
            height={40}
            width={40}
            style={{
              marginLeft: 20,
              marginRight: '10px',
            }}
          />{' '}
          VJAA
        </motion.div>
      )}
    </div>
  );
};
