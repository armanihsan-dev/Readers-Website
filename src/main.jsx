import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App.jsx';
import Form from '../components/Form.jsx';
import Topnav from '../components/Topnav.jsx';
import Header from '../components/Header.jsx';

// Fix: Add basename to handle GitHub Pages
const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
    },
    {
      path: '/formSubmission',
      element: (
        <>
          <Topnav
            span={'Enroll Now!'}
            text={' Take the Test & Study for FREE for a Whole Year!'}
            icons={'🚀📚'}
          />
          <Header />
          <Form />
        </>
      ),
    },
  ],
  {
    basename: '/Readers-Website', // Add this line
  }
);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-rvpjvy7rr4hnc4k8.us.auth0.com"
      clientId="kh01dvMRtXjoaJWR8ajS791EyZFncpdf"
      authorizationParams={{
         redirectUri: 'https://armanihsan-dev.github.io/Readers-Website/',
      }}
    >
      <RouterProvider router={router} />
    </Auth0Provider>
  </React.StrictMode>
);
