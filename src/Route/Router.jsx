import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      
      {
        path: 'login',
        element: (
          <>
          <Login/>
          </>
        )
      },
      {
        path: 'signup',
        element: (
          <>
            <Signup/>
          </>
        )
      },
      
    ]
  }
]);

export default router;
