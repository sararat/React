import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Login from './component/Login.jsx'
import Sigup from './component/Signup.jsx'
import { createBrowserRouter, RouterProvider } from "react-router";
import { UserAuthContextProvider } from './context/UserAuthContext.jsx';

const router = createBrowserRouter([
  {
    path:"/",
    element: <App />,
  },
  {
    path:"/login",
    element: <Login/>,  
  },
  {
    path:"/signup",
    element: <Sigup/>,  
  },
])


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserAuthContextProvider>
      <RouterProvider router={router} />
    </UserAuthContextProvider>
  </StrictMode>
);
