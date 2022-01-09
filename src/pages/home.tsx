import { Navigate } from 'react-router-dom';
import { getToken } from '../cookies';
import { DashBoard } from './dashboard';

export const HomePage = () => {
  //TODO: uncomment this before commit please
  // const token = getToken();
  // if (!token) {
  //   return <Navigate to='/login' />;
  // }

  return (
<<<<<<< HEAD
    <div>
      <h1>hello world</h1>
      <button onClick={authenticateUser}>Authenticate</button>
      <button onClick={getUser}>get</button>
      <button onClick={createAccount}>create</button>
    </div>
=======
    <>
      <DashBoard />
    </>
>>>>>>> 0af1ba170b70dac0c8cfe6e302c352306e51f77e
  );
};
