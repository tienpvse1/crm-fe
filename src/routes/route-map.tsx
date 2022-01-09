import { RouteObject } from 'react-router-dom';
import { Layout } from '../common/layout';
import { HomePage } from '../pages/home';
import { LoginPage } from '../pages/login';
import { SignUpPage } from '../pages/signup';

export const route: RouteObject[] = [
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/signup',
    element: <SignUpPage />,
  },
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
    ],
  },
];
