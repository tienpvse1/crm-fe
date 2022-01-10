import { Menu1 } from './menu-1';

const style = {
  fontSize: 18,
};

interface MenuNavigatorProps {
  onCollapse: () => void;
  collapsed: boolean;
}

export const MenuNavigator = ({ onCollapse, collapsed }: MenuNavigatorProps) => {
  return (
    <>
      <Menu1 onCollapse={onCollapse} collapsed={collapsed} style={style} />
    </>
  );
};
