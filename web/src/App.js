import "./App.css";
import React from "react";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import { useRoutes, Navigate } from "react-router-dom";

function App() {
  const publicRoutes = [
    {
      path: "/",
      element: <Layout />,
      children: [{ path: "/", element: <Home /> }],
    },
    {
      path: "*",
      element: <Navigate to="/" replace={true} />,
    },
  ];

  const routing = useRoutes(publicRoutes);

  //return <Home />;
  return <React.Fragment>{routing}</React.Fragment>;
}

export default App;
