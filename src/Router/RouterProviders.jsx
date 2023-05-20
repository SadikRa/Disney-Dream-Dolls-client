import { createBrowserRouter } from "react-router-dom";
import Main from "../Component/Main/Main";
import Home from "../Component/Home/Home";
import Login from "../Component/Login/Login";
import Register from "../Component/Register/Register";
import ErrorPage from "../ErrorPage";
import AddAToy from "../Component/AddAToy/AddAToy";
import Blogs from "../Component/Blogs/Blogs";
import AllToys from "../Component/AllToys/AllToys";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import MyToy from "../Component/MyToy/MyToy";
import SingleToyDetailsPage from "../SingleToyDetails/SingleToyDetailsPage";
import UpdateToy from "../Component/UpdateToy/UpdateToy";

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
          element: <PrivateRoute><AddAToy></AddAToy></PrivateRoute>,
        },
        {
          path: '/blog',
          element: <Blogs></Blogs>
        },
        {
          path: '/allToys',
          element: <AllToys></AllToys>,
        },
        {
          path: '/myToy',
          element: <PrivateRoute><MyToy></MyToy></PrivateRoute>, 
        },
        {
          path: '/detailsPage/:id',
          element: <PrivateRoute><SingleToyDetailsPage></SingleToyDetailsPage></PrivateRoute>,
          loader: ({params}) => fetch(`https://assessment-11-server.vercel.app/toyStores/${params.id}`)
        },
        {
          path: '/updateToy/:id',
          element: <UpdateToy></UpdateToy>,
          loader: ({params}) => fetch(`https://assessment-11-server.vercel.app/toyStores/${params.id}`)
        }

      ]
    },
  ]);
  export default router;