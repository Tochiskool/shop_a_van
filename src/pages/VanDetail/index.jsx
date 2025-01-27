import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const VanDetail = () => {
  const params = useParams();
  const [van, setVans] = useState(null);
  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, [params.id]);

  return (
    <div>
      {van ? (
        <div>
          <img src={van.imageUrl} alt={van.type} />
          <i className={`van-type ${van.type} selected`}>{van.type}</i>
          <h2>{van.name}</h2>
          <p>${van.price}/day</p>
          <p>{van.description}</p>
          <button className='btn-primary'>Ren this van</button>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default VanDetail;
