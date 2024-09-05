import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Login from "../Pages/Login";


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
    //   {
    //     path: 'signup',
    //     element: (
    //       <>
       
    //           <title>Evento</title>
            
    //         <SignUp></SignUp>
    //       </>
    //     )
    //   },
      
    ]
  }
]);

export default router;
