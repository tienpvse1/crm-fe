import { Menu_1 } from './menu-1';
import { Menu_2 } from './menu-2';

const style = {
  fontSize: 18,
};

interface MenuNavigatorProps {
  onCollapse: () => void;
}

export const MenuNavigator = ({ onCollapse }: MenuNavigatorProps) => {
  return (
    <>
      <Menu_1 onCollapse={onCollapse} style={style} />
      <Menu_2 style={style} />
    </>
  );
};
