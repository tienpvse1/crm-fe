import { Navigate } from 'react-router-dom';
import { getToken } from '../cookies';
import { getUser } from '../modules/account/get/account.get';
import { createAccount } from '../modules/account/mutation/account.post';
import { authenticateUser } from '../modules/auth/mutation/auth.post';

export const HomePage = () => {
  //TODO: uncomment this before commit please
  // const token = getToken();
  // if (!token) {
  //   return <Navigate to='/login' />;
  // }

  return (
    <div>
      <h1>hello world</h1>
      <button onClick={authenticateUser}>Authenticate</button>
      <button onClick={getUser}>get</button>
      <button onClick={createAccount}>create</button>
    </div>
  );
};
