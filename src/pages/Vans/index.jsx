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
          data.vans.map((e) => (
            <ul className='vansContainer'>
              <li key={e.id} className='center'>
                <h3> Name: {e.name}</h3>
                <img src={e.imageUrl} alt={e.name + " vans"} />
                <p>
                  <strong>Price: </strong>
                  {e.price}
                </p>
                <p>
                  <strong>Description: </strong>
                  {e.description}
                </p>
                <p>
                  <strong className={`van-type-${e.type}-selected`}>
                    Type: {e.type}
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
