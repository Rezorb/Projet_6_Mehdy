import * as React from "react";
import { createBrowserRouter } from "react-router-dom";

import Home from "../../pages/Home/home";
import About from "../../pages/About/About";
import Error404 from "../../pages/Error/Error";
import Housing from "../../pages/Housing/Housing";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/housing/:id", element: <Housing /> },
  { path: "*", element: <Error404 /> },
]);

export default router;
