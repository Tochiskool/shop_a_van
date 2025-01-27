import { Link } from "react-router-dom";
import UseFetch from "../../useFetch";
// import Navbar from "../Navbar";
import "./vans.css";

const Vans = () => {
  const [data] = UseFetch("/api/vans");

  return (
    <>
      {/* <Navbar /> */}
      <div className='vansBody col-12'>
        {data &&
          data.vans.map((van) => (
            <ul className='vansContainer'>
              <li key={van.id} className='center'>
                <h3> Name: {van.name}</h3>
                <Link to={`/vans/${van.id}`}>
                  <img src={van.imageUrl} alt={van.name + " vans"} />
                </Link>{" "}
                <p>
                  <strong>Price: $ </strong>
                  {van.price}/day
                </p>
                {/* <p>
                  <strong>Description: </strong>
                  {van.description}
                </p> */}
                <p>
                  <strong className={`van-type-${van.type}-selected`}>
                    Type: {van.type}
                  </strong>
                </p>
              </li>
            </ul>
          ))}
      </div>
    </>
  );
};

export default Vans;
