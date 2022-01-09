import { Navigate } from 'react-router-dom';
import { getToken } from '../cookies';
import { DashBoard } from './dashboard';

export const HomePage = () => {
  const token = getToken();
  if (!token) {
    return <Navigate to='/login' />;
  }

  return (
    <>
      <DashBoard />
    </>
  );
};
