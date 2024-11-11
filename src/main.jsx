import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Calendar from './pages/Calendar';
import DayView from './pages/DayView';
import Admin from './pages/Admin';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Calendar />,
      },
      {
        path: 'dag/:dayId', 
        element: <DayView />,
      },
      {
        path: 'admin',
        element: <Admin />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);