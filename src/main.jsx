import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import Blogs from './components/Blogs/Blogs';
import ErrorPage from './components/ErrorPage/ErrorPage';
import JobDetails from './components/JobDetails/JobDetails';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
      },
      {
        path:'/statistics',
        element:<Statistics></Statistics>,
      },
      {
        path:'/appliedJobs',
        element:<AppliedJobs></AppliedJobs>,
      },
      {
        path:'/blogs',
        element:<Blogs></Blogs>
      },
      {
        path:'/job/:id',
        element:<JobDetails></JobDetails>,
        loader: () => fetch('jobs.json')
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
