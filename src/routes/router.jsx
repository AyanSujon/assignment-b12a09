import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../pages/Home";
import Error404 from "../pages/Error404";
import Loading from "../pages/Loading";
import Profile from "../pages/Profile";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import Games from "../pages/Games";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <Error404/>,
    hydrateFallbackElement: <Loading/>,
    children:[
        {
            index: true,
            element: <Home/>,
        },
        {
            path: "/profile",
            element: <Profile/>,
        },
        {
            path: "/games",
            element: <Games/>,
        },
        {
            path: '/signin',
            element: <Signin/>
        },
        {
            path: '/signup',
            element: <Signup/>
        },
    ]
  },
]);
export default router; 
