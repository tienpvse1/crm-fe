import { TOKEN } from '@constance/cookie';
import { setCookie } from '@cookies';
import { authenticateUser } from '@modules/auth/mutation/auth.post';
import { Button } from 'antd';
import { DashBoard } from './dashboard';

export const HomePage = () => {
  //TODO: uncomment this before commit please
  const handleLogin = async () => {
    const authResult = await authenticateUser();
    setCookie(TOKEN, authResult.data, 7);
  };

  return (
    <>
      <Button onClick={handleLogin} type='default'>
        Login
      </Button>
      <DashBoard />
    </>
  );
};
