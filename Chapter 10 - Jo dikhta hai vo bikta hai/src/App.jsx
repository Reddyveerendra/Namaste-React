import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom"; // Correct import statement
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { StrictMode } from "react";
import Header from "./Header";
import Main from "./Main";
import Error from "./Error";
import Footer from "./Footer";
import Contact from "./Contact";
import Login from "./Login";
import Cart from "./Cart";
import Restaurant from "./Restaurant";
import { lazy, Suspense } from "react";
import { Shimmer } from "./Shimmer";

const Instamart = lazy(() => import("./Instamart"));

function App() {
  console.log(Shimmer);
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

const appLayout = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/:location",
        element: <Main />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/:location/:id",
        element: <Restaurant />,
      },
      {
        path: "/:location/instamart",
        element: (
          <div>
            <Suspense fallback={<div>Loading...</div>}>
              <Instamart />
            </Suspense>
          </div>
        ),
      },
    ],
  },
]);

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <RouterProvider router={appLayout} />
  </StrictMode>
);
