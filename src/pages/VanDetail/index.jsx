import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./vandetail.css";

const VanDetail = () => {
  const params = useParams();
  const [van, setVans] = useState(null);
  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, [params.id]);

  return (
    <div className='col-12 right'>
      {van ? (
        <div className='imageBackground'>
          <img src={van.imageUrl} alt={van.type} />
          <div className='carStyle'>
            <i className={`van-type-${van.type}-selected`}>{van.type}</i>
            <h2>{van.name}</h2>
            <p>${van.price}/day</p>
            <p>{van.description}</p>
            <button className=' col-12 btn-primary'>Rent this van</button>
          </div>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
      {/* <div className='imageBackground'>
                  <img src={rightObject.imageUrl} alt='a beautiful car' />
                </div>
                <div className='carStyle'>
                  <button className='btn-primary'>Explore</button>
                  <p>price: {rightObject.price}</p>
                  <p>Brief description: {rightObject.description}</p>
                  <button className='col-12 btn-primary'>Explore more</button>
                </div> */}
    </div>
  );
};

export default VanDetail;
