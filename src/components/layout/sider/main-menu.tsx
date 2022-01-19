import { MenuSider } from './menu';

const style = {
  fontSize: 17,
};

interface MenuNavigatorProps {
  onCollapse: () => void;
  collapsed: boolean;
}

export const MenuNavigator = ({ onCollapse, collapsed }: MenuNavigatorProps) => {
  return (
    <>
      <MenuSider onCollapse={onCollapse} collapsed={collapsed} style={style} />
    </>
  );
};
