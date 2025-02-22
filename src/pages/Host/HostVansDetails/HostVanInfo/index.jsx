import React from "react";
import { useOutletContext } from "react-router-dom";

const HostVanInfo = () => {
  const { van } = useOutletContext();
  return (
    <section>
      <h4>Name:{van.name}</h4>
      <h4>Category: {van.type}</h4>
      <h4>Description: {van.description}</h4>
      <h4>Visibility: Public</h4>
    </section>
  );
};

export default HostVanInfo;
