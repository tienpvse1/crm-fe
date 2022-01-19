import { ConfigProvider } from 'antd';
import style from '../stylesheets/base/_export.module.scss';

export const ThemeColor = {
  primaryColor: style.primaryColor,
  percentColorIncrease: style.percentColorIncrease,
  percentColorDecrease: style.percentColorDecrease
}

//Config global color for ant design
ConfigProvider.config({
  theme: {
    primaryColor: style.primaryColor,
  },
});