import { StrictMode } from "react";
import UpdateUser from "./Components/UpdateUser.jsx";
import { createRoot } from "react-dom/client";
import UserDetails from "./Components/UserDetails.jsx";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
  },
  {
    path: "/users/:id",
    loader: ({ params }) => fetch(`http://localhost:3000/users/${params.id}`),
    Component: UserDetails,
  },
  {
    path: "/update-user/:id",
    loader: ({ params }) => fetch(`http://localhost:3000/users/${params.id}`),
    Component: UpdateUser,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
