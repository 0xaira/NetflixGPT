import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import LandingPage from './components/LandingPage/LandingPage';
import Login from './components/Login';


const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage/>
  },
  {
    path: '/login',
    element: <Login/>
  }
]);

const App = () => {
  return (
    <RouterProvider router={appRouter}>
    </RouterProvider>
  );
}

export default App