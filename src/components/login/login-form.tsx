import { TOKEN } from '@constance/cookie';
import { setCookie } from '@cookies';
import { IAuthDto } from '@modules/auth/dto/auth.dto';
import { useAuthenticateUser } from '@modules/auth/mutation/auth.post';
import { Button, Checkbox, Form, Input } from 'antd';
import { Navigate } from 'react-router-dom';
import { Modal } from './modal';
export const LoginForm = () => {
  const { mutate, error, data, reset } = useAuthenticateUser();
  const handleLogin = async (authDto: IAuthDto) => {
    mutate(authDto);
  };
  if (data) {
    setCookie(TOKEN, data.data || '', 7);
    return <Navigate to={'/'} replace />;
  }

  return (
    <>
      {error && <Modal reset={reset} />}
      <Form
        name='normal_login'
        className='login-form'
        initialValues={{ remember: true }}
        onFinish={(value: IAuthDto) => handleLogin(value)}
      >
        <Form.Item
          name='email'
          rules={[
            { required: true, type: 'email', message: 'Xin hãy nhập email!' },
          ]}
        >
          <Input placeholder='Email người dùng' />
        </Form.Item>
        <Form.Item
          name='password'
          rules={[{ required: true, message: 'Xin hãy nhập mật khẩu!' }]}
        >
          <Input type='password' placeholder='Mật khẩu' />
        </Form.Item>
        <Form.Item style={{ marginTop: '-15px' }}>
          <Form.Item name='remember' valuePropName='checked' noStyle>
            <Checkbox className='checkbox-login-form-forgot'>Ghi nhớ</Checkbox>
          </Form.Item>

          <a className='login-form-forgot' href=''>
            Quên mật khẩu?
          </a>
        </Form.Item>

        <Button
          shape='round'
          type='primary'
          htmlType='submit'
          className='login-form-button'
        >
          Đăng nhập
        </Button>
      </Form>
    </>
  );
};
