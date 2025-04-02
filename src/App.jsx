import React from 'react'
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import './index.css'
import Layout from './components/Layout';
import Admin from './pages/Admin';
import Normal from './pages/Normal';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: (
      <div className="min-h-screen flex justify-center items-center">
        <h1 className="text-4xl">404 - Page Not Found</h1>
      </div>
    ),
    children: [
      {path: "/", element: <Normal /> },
      {path: "admin", element: <Admin /> },
    ]
  }
]);


const App = () => {
  return <RouterProvider router={router} />;
};

export default App