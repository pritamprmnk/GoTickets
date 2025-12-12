import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './layout/Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import Signup from './components/Signup/Signup.jsx';
import Login from './components/Login/Login.jsx';
import Forgot from './components/Forgot/Forgot.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
            { index: true, Component: Home },
            { path: "login", Component: Login },
            { path: "signup", Component: Signup },
            { path: "/forgot", Component: Forgot },

    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
