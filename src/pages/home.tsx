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
    <>
      <DashBoard />
    </>
  );
};
