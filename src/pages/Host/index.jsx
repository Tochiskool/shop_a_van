import React from "react";
import { Outlet } from "react-router-dom";
import HostLayout from "../../components/HostLayout";

const Host = () => {
  return (
    <section>
      <HostLayout />
      <Outlet />
    </section>
  );
};

export default Host;
