import { createBrowserRouter, Navigate } from "react-router-dom";
import PublicLayout from "../Layouts/PublicLayout";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import PrivateLayout from "../Layouts/PrivateLayout";
import Movies from "../pages/Movies";
import TvSeries from "../pages/TvSeries";
import Bookmarket from "../pages/Bookmarket";
import Home from "../pages/Home";
import Search from "../pages/Search";
import PageNotFound from "../pages/PageNotFound404";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout></PublicLayout>,
    errorElement: <PageNotFound></PageNotFound>,
    children: [
      {
        index: true,
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
      {
        element: <PrivateLayout></PrivateLayout>,
        children: [
          {
            path: "home",
            element: <Home></Home>,
          },
          {
            path: "movies",
            element: <Movies></Movies>,
          },
          {
            path: "tvseries",
            element: <TvSeries></TvSeries>,
          },
          {
            path: "bookmarket",
            element: <Bookmarket></Bookmarket>,
          },
          {
            path: "home/search",
            element: <Search></Search>,
          },
          {
            path: "movies/search",
            element: <Search></Search>,
          },
          {
            path: "tvseries/search",
            element: <Search></Search>,
          },
          {
            path: "bookmarket/search",
            element: <Search></Search>,
          },
        ],
      },
    ],
  },
]);
