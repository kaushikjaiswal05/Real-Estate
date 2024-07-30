import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import LayOut from './routes/layout/LayOut'
import HomePage from './routes/homepage/HomePage';
import ListPage from './routes/listpages/ListPage';
import SinglePage from './routes/singlepage/SinglePage';
import LoginPage from './routes/loginpage/LoginPage';
import Register from './routes/register/Register';
import Profile from './routes/profilepage/Profile';
import Contact from './routes/contactpage/Contact';
import Agents from './routes/agents/Agents';
function App() {
  const router = createBrowserRouter([{
    path: "/",
    element: <LayOut/>,
    children:[{
      path: "/",
      element: <HomePage/>
    },
    {
      path: "/contact",
      element: <Contact/>
    },
    {
      path: "/agents",
      element: <Agents/>
    },
    {
      path: "/list",
      element: <ListPage/>
    },
    {
      path: "/:id",
      element: <SinglePage/>
    },
    {
      path: "/login",
      element: <LoginPage/>
    },
    {
      path: "/register",
      element: <Register/>
    },
    {
      path: "/profile",
      element: <Profile/>
    }]
  }])
  return (
    <RouterProvider router={router} />
  )
}
export default App