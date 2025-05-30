// import { useState } from "react";
import { Link, Outlet, useLocation, useLoaderData } from "react-router-dom";

import "./hostvansdetails.css";
// import { useEffect } from "react";
import HostVanDetailsNav from "../../../components/HostVanDetailsNav";
import { getHostVans } from "../../../api";

export const loader = ({ params }) => {
  return getHostVans(params.id);
};
const HostVansDetails = () => {
  const van = useLoaderData();
  const location = useLocation();
  // const [van, setHostVans] = useState(null);
  // const params = useParams();

  // useEffect(() => {
  //   fetch(`/api/host/vans/${params.id}`) // Assuming the response is an array of vans
  //     .then((res) => res.json())
  //     .then((data) => {
  //       // Find the specific van using the id
  //       const selectedVan = data.vans.find((v) => v.id === params.id); // Find the van with the matching id
  //       setHostVans(selectedVan); // Set the selected van to state
  //     })
  //     .catch((err) => console.error("Error fetching van data: ", err));
  // }, [params.id]);
  // if (!van) {
  //   return <div className='loading'>Loading...</div>;
  // }
  console.log(van);
  const search = location.state?.search || "";
  return (
    <section>
      <Link to={`../vans${search}`} className='backLink'>
        {`<--`}Back to all vans
      </Link>
      <div className='hostVansContainer'>
        <h1 className='vanName'>{van.name}</h1>
        <div className='vanImage'>
          <img src={van.imageUrl} alt={`Beautiful ${van.name}`} />
        </div>
        <div className='vanDetails'>
          <h1 className='vanName'>{van.name}</h1>
          <p className='vanDescription'>{van.description}</p>
          <p className='vanPrice'>
            <span className='priceLabel'>Price per night:</span> ${van.price}
          </p>
        </div>
      </div>
      <HostVanDetailsNav />
      <Outlet context={{ van }} />
    </section>
  );
};

export default HostVansDetails;
