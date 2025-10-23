import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../pages/Home";
import Error404 from "../pages/Error404";
import Loading from "../pages/Loading";
import Profile from "../pages/Profile";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import Games from "../pages/Games";
import PrivateRoute from "./PrivateRoute";
import GameDetails from "../pages/GameDetails";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/Contact";


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
            path: "/games",
            element: <Games/>,
        },
        {
            path: "/about-us",
            element: <AboutUs/>,
        },
        {
            path: "/contact",
            element: <ContactUs/>,
        },
        {
            path: '/signin',
            element: <Signin/>,
        },
        {
            path: '/signup',
            element: <Signup/>,
        },
        {
            path: "/profile",
            element: <PrivateRoute><Profile/></PrivateRoute>,
        },
        {
            path: '/game-details/:id',
            element: <PrivateRoute><GameDetails/></PrivateRoute>,
        },
    ]
  },
]);
export default router; 
