import { createBrowserRouter } from "react-router-dom";
import Main from "../Component/Main/Main";
import Home from "../Component/Home/Home";
import Login from "../Component/Login/Login";
import Register from "../Component/Register/Register";
import ErrorPage from "../ErrorPage";
import AddAToy from "../Component/AddAToy/AddAToy";
import Blogs from "../Component/Blogs/Blogs";
import AllToys from "../Component/AllToys/AllToys";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: 'addAToy',
          element: <AddAToy></AddAToy>
        },
        {
          path: '/blog',
          element: <Blogs></Blogs>
        },
        {
          path: '/allToys',
          element: <AllToys></AllToys>,
          loader: () => fetch('https://assessment-11-server.vercel.app/toyStores')
        }

      ]
    },
  ]);
  export default router;