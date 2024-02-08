import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Contect from "./pages/contect";
import Login from "./components/auth/login";
import Register from "./components/auth/register";
import Dashboard from "./pages/dashboard";
import Exams from "./pages/exams";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/contect",
      element: <Contect />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
    {
      path: "/exams",
      element: <Exams />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);
  return (
    <Provider store={store}>
      <RouterProvider router={router} />{" "}
    </Provider>
  );
  // return <RouterProvider router={router} />;
}

export default App;
