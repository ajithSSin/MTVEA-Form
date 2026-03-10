import { useState } from 'react'
import { createBrowserRouter, 
  Navigate, 
  RouterProvider } from "react-router-dom";
import FormPage from './page/Registration'

import HomePage from "./page/Home";
import RegistrationPage from "./page/Registration"


const routes = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/home" replace />
  },
  {
    path: '/home',
    element: <HomePage />
  },
  {
    path:"/registration",
    element:<RegistrationPage/>
  }
])

function App() {  

 
   return (
    <RouterProvider router={routes} />
    
  );
}

export default App
