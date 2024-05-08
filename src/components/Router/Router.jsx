import * as React from "react";
import { createBrowserRouter } from "react-router-dom";

import Home from "../../pages/Home/home";
import About from "../../pages/About/About";
import Error404 from "../../pages/Error/Error";
import Housing from "../../pages/Housing/Housing";

import Layout from "../Layout/layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: "/about",
    element: (
      <Layout className="about_page">
        <About />
      </Layout>
    ),
  },
  {
    path: "/housing/:id",
    element: (
      <Layout>
        <Housing />
      </Layout>
    ),
  },
  {
    path: "*",
    element: (
      <Layout className="error_page">
        <Error404 />
      </Layout>
    ),
  },
]);

export default router;
