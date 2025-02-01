import React from "react";
import { Outlet } from "react-router-dom";
import "./navbar.css";
import Header from "../../components/Header";
import Footer from "../Footer";
const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
