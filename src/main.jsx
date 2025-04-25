import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'// how this is related to the whole website
import { RouterProvider } from "react-router";
import { router } from './Routes/Routes.jsx';
import { Helmet, HelmetProvider } from 'react-helmet-async';


createRoot(document.getElementById('root')).render(
 <HelmetProvider>
   <RouterProvider router={router}> </RouterProvider>
 </HelmetProvider>
)
