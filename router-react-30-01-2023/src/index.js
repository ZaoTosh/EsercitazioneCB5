import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Root from "./routes/root";
import Contacts from "./routes/contacts";
import Contact from "./routes/contact";
import Posts from "./routes/posts";
import Post from "./routes/post";
import "./index.css";
import ErrorPage from "./error-page";
import App from "./App";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     errorElement: <ErrorPage />,
//   },
//   // {
//   //   path: "/contacts",
//   //   element: <Root />,
//   // },
//   {
//     path: "/contacts/",
//     element: <Contacts />,
//   },

//   {
//     path: "/contacts/:contactID",
//     element: <Contact />,
//   },
//   {
//     path: "/posts/",
//     element: <Posts />,
//   },
//   {
//     path: "/posts/:postID",
//     element: <Post />,
//   },
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<App />} errorElement={<ErrorPage />} />
      <Route path="/" element={<Root />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/contacts/:contactID" element={<Contact />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/posts/:postID" element={<Post />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
