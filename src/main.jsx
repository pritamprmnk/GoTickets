import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './layout/Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import Signup from './components/Signup/Signup.jsx';
import Login from './components/Login/Login.jsx';
import Forgot from './components/Forgot/Forgot.jsx';
import Error404 from './page/Error404.jsx';
import AuthProvider from './contexts/AuthProvider/AuthProvider.jsx';
import AllTickets from './components/AllTickets/AllTickets.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import PrivateRoutes from './Routes/PrivateRoutes.jsx';
import { Toaster } from 'react-hot-toast';
import MyProfile from './components/MyProfile/MyProfile.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
            { 
              index: true, 
              Component: Home 
            },

            { 
              path: "login", 
              Component: Login 
            },
            { 
              path: "signup", 
              Component: Signup 
            },
            { 
              path: "/forgot", 
              Component: Forgot 
            },
            {
              path: "/alltickets", 
              element: <PrivateRoutes> <AllTickets></AllTickets> </PrivateRoutes> 
            },
            {
              path: "/dashboard", 
              element: <PrivateRoutes> <Dashboard></Dashboard> </PrivateRoutes> 
            },
            {
              path: "/myprofile", 
              element: <PrivateRoutes> <MyProfile></MyProfile>  </PrivateRoutes>
            },

    ]
  },
    {
    path: "*",
    Component: Error404
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthProvider>
          <Toaster
        position="top-center"
        reverseOrder={false}
      /> 
    <RouterProvider router={router}></RouterProvider>
   </AuthProvider>
  </StrictMode>,
)
