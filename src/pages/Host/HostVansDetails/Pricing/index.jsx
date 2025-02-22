import React from "react";
import { useOutletContext } from "react-router-dom";
import "./pricing.css";

const Princing = () => {
  const { van } = useOutletContext();
  return (
    <section>
      <h4 className='vanPrice'>
        {" "}
        <span className='priceLabel'>Price per night:</span> ${van.price}
      </h4>
      <h4>Category: {van.type}</h4>
      <h4>Description: {van.description}</h4>
      <h4>Visibility: Public</h4>
    </section>
  );
};

export default Princing;
