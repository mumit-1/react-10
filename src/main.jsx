import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Component/Root/Root';
import Error from './Component/Error/Error';
import Home from './Component/Home/Home';
import Dashboard from './Component/Dashboard/Dashboard';
import BookDetail from './Component/BookDetail/BookDetail';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element:<Home></Home>
      },
      {
        path: 'books/:bookId',
        element:<BookDetail></BookDetail>,
        loader: ()=>fetch('../public/booksData.json')
      },
      {
        path: 'dashboard',
        element: <Dashboard></Dashboard>
      }
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
  </StrictMode>
)
