import { PipelineWrapper } from '@components/pipelines/wrapper';
import { Contact } from '@pages/contact';
import { RouteObject } from 'react-router-dom';
import { LayoutApp } from '../common/layout';
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
    element: <LayoutApp />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'pipeline',
        element: <PipelineWrapper />
      }
    ],
  },
];
