import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'// how this is related to the whole website
import { RouterProvider } from "react-router";
import { router } from './Routes/Routes.jsx';


createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}> </RouterProvider>
)
