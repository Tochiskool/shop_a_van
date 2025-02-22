import React from "react";
import { useOutletContext } from "react-router-dom";

const Photos = () => {
  const { van } = useOutletContext();
  return (
    <section>
      <h4>Name:{van.name}</h4>

      <img
        src={van.imageUrl}
        width='200'
        height='200'
        alt={`Beautiful ${van.name}`}
      />
    </section>
  );
};

export default Photos;
