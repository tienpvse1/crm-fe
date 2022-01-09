import { Divider } from 'antd';
import { Link } from 'react-router-dom';
import { LoginForm } from '../components/login/login-form';
import GoogleButton from 'react-google-button';
import '../index.css';
import { controllers } from '../constance/controllers';
import { envVars } from '../env/var.env';
export const LoginPage = () => {
  const { AUTH } = controllers;
  const handleGoogleClick = () => {
    window.location.href = `${envVars.VITE_BE_BASE_URL}/${AUTH}/google`;
  };
  return (
    <div className='wrapper-background'>
      <div className='wrapper-login-form'>
        <div className='header-form'>
          <h1>Đăng Nhập</h1>
          <span>
            Không có tài khoản?
            <Link to='/signup'> Đăng Ký</Link>
          </span>
        </div>
        <div className='content-login-form'>
          <LoginForm />
        </div>
        <Divider>ĐĂNG NHẬP VỚI</Divider>
        <div className='footer-login-from'>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <GoogleButton onClick={handleGoogleClick} />
          </div>
        </div>
        <a href=''>Chính sách bảo mật</a>
      </div>
    </div>
  );
};
