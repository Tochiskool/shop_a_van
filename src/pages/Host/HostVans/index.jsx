import React from "react";
// import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
// import NoPage from "../../NoPage";
import "./hostvans.css";
import { getHostVans } from "../../../api";

export const loader = async () => {
  try {
    const data = await getHostVans();
    console.log("Fetched Data:", data); // Debugging
    return data;
  } catch (error) {
    console.error("Error loading host vans:", error);
    throw new Response("Failed to load vans", { status: 500 });
  }
};

const HostVans = () => {
  // const [vans, setVans] = useState([]);
  // const [error, setError] = useState(null);
  const vans = useLoaderData();

  if (!vans) {
    return <h1 className='loading'>Loading...</h1>;
  }
  // useEffect(() => {
  //   fetch(`/api/host/vans`)
  //     .then((res) => res.json())
  //     .then((data) => setVans(data.vans))
  //     //   .catch((error) => console.error("Error fetching vans:", error));
  //     .catch((error) => setError("Error loading vans"));
  // }, []);
  // if (error) {
  //   return <NoPage />;
  // }
  // if (!vans) {
  //   return <>Loading....</>;
  // }
  const hostVansEls = (vans || []).map((van) => (
    <Link
      to={`/host/vans/${van.id}`}
      key={van.id}
      className='host-van-link-wrapper'
    >
      <div className='host-van-single'>
        <img src={van.imageUrl} alt={`Cool ${van.name}`} />
        <div className='host-van-info'>
          <h3>{van.name}</h3>
          <p>${van.price}</p>
        </div>
      </div>
    </Link>
  ));
  return (
    <section>
      <h1 className='host-vans-title'>Your Listed Vans</h1>
      <div className='host-vans-list'>
        {vans.length > 0 ? (
          <section>{hostVansEls}</section>
        ) : (
          <h1>No vans found.</h1>
        )}
      </div>
    </section>
  );
};

export default HostVans;
