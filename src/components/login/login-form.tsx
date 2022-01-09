import { Form } from 'antd';
import { LoginFormItems } from './login-form-items';
export const LoginForm = () => {
  return (
    <>
      <Form
        name='normal_login'
        className='login-form'
        initialValues={{ remember: true }}
      >
        <LoginFormItems />
      </Form>
    </>
  );
};
