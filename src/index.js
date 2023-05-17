import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Converter from "./components/Converter";
import News from "./components/News";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Header />
        <Landing />
        <Converter />
      </div>
    ),
  },
  {
    path: "/news",
    element: (
      <div>
        <Header />
        <News />
      </div>
    ),
  },
  {
    path: "/contact",
    element: (
      <div>
        <Header />
        <h1>CONTACT!!!</h1>
      </div>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
