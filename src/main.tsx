import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import GameDetail from './components/GameDetail.tsx';
import Layout from './components/Layout.tsx';
import { QueryClient, QueryClientProvider } from 'react-query';
import GamesByTag from './components/GamesByTag.tsx';
import ErrorBoundary from './components/ErrorBoundary.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <App />,
      },
      {
        path: '/game/:id',
        element: <GameDetail />,
      },
      {
        path: '/tags/:tag',
        element: <GamesByTag />,
        errorElement: <ErrorBoundary />,
      },
    ],
  },
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
