import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import Home from "../Components/Home";
import PrivateRoute from "./PrivateRoute";
import ProductsPage from "../Pages/Products/ProductsPage";
import CartPage from "../Pages/CartPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <PrivateRoute><Home/></PrivateRoute>,
      },
      
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
      {
        path: 'products',
        element: (
          <>
            <PrivateRoute><ProductsPage/></PrivateRoute>
          </>
        )
      },
      {
        path: 'cart',
        element: (
          <>
            <PrivateRoute><CartPage/></PrivateRoute>
          </>
        )
      }
      
    ]
  }
]);

export default router;
