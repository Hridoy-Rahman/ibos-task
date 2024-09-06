import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider,} from "react-router-dom";
import './index.css'
import AuthProvider from './Provider/AuthProvider';
import router from './Route/Router';
import { CartProvider } from './Provider/CartProvider';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <CartProvider>
        <RouterProvider router={router} />
        </CartProvider>
      </AuthProvider>
  </React.StrictMode>,
)
