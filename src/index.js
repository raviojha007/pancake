import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
  createRoutesFromElements,
} from "react-router-dom";
import Aboutus from "./routes/Aboutus";
import Home from "./routes/Home";
import Services from "./routes/Services";
import Contacts from "./routes/Contacts";
import Navbar from "./components/Navbar";
import "./App.css";

const AppLayout = () => (
  <div className="lay-out">
    <Navbar />
    <Outlet />
  </div>
);

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route element={<AppLayout />}>
//       <Route path="/" element={<Home />} />
//       <Route path="/products" element={<Products />} />
//       <Route path="/reports" element={<Reports />} />
//     </Route>
//   )
// );

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "aboutus",
        element: <Aboutus />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "contacts",
        element: <Contacts />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
