import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NoPage from "../../NoPage";
import "./hostvans.css";

const HostVans = () => {
  const [vans, setVans] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`/api/host/vans`)
      .then((res) => res.json())
      .then((data) => setVans(data.vans))
      //   .catch((error) => console.error("Error fetching vans:", error));
      .catch((error) => setError("Error loading vans"));
  }, []);
  if (error) {
    return <NoPage />;
  }
  if (!vans) {
    return <>Loading....</>;
  }
  const hostVansEls = vans.map((van) => (
    <Link
      to={`/host/vans/${van.id}`}
      key={van.id}
      className='host-van-link-wrapper'
    >
      <div className='host-van-single' key={van.id}>
        <img src={van.imageUrl} alt={`cool ${van.name}`} />
        <div className='host-van-info'>
          <h3>{van.name}</h3>
          <p>${van.price}</p>
        </div>
      </div>
    </Link>
  ));
  return (
    <section>
      <h1 className='host-vans-title'>Yours listed vans</h1>
      <div className='host-vans-list'>
        {vans.length > 0 ? (
          <section>{hostVansEls}</section>
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </section>
  );
};

export default HostVans;
