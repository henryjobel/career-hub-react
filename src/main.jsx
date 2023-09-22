import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import Jobs from './Components/Jobs/Jobs';
import Blogs from './Components/Blogs/Blogs';
import AppliedJobs from './Components/Appliedjobs/AppliedJobs.Jsx';
import Statistics from './Components/Statistics/Statistics.Jsx';
import Jobdetails from './Components/Jobdetails/Jobdetails';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/jobs",
        element: <Jobs></Jobs>
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>
      },
      {
        path: "/applied",
        element: <AppliedJobs></AppliedJobs>,
        loader: () => fetch('jobs.json')
       
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>
      },
      {
        path: "/job/:id",
        element: <Jobdetails></Jobdetails>,
        loader: ()=> fetch('jobs.json')

      }
      
    ]
    
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
