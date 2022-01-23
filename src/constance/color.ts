import { ConfigProvider } from 'antd';
import style from '../stylesheets/base/_export.module.scss';

ConfigProvider.config({
  theme: {
    primaryColor: style.primaryColor,
  },
});