import {
  Link,
  useSearchParams,
  useLocation,
  useLoaderData,
} from "react-router-dom";
// import UseFetch from "../../useFetch";
// import Navbar from "../Navbar";
import "./vans.css";
import { getVans } from "../../api";

export function vanLoader() {
  return getVans();
}
const Vans = () => {
  const vans = useLoaderData();
  console.log(vans);
  // const [vans, setVans] = useState();
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  console.log(location);
  // const [data] = UseFetch("/api/vans");
  // useEffect(() => {
  //   fetch("/api/vans")
  //     .then((res) => res.json())
  //     .then((data) => setVans(data.vans));
  //     .catch((error )=> console.error("Error fetching vans:", error))
  // }, []);

  // console.log(data);
  console.log(searchParams.toString());
  const typeFilter = searchParams.get("type");
  console.log("Filter Type:", typeFilter, "Type:", typeof typeFilter);

  // Ensure data exists before filtering
  const displayFilteredData =
    vans?.filter((van) => (typeFilter ? van.type === typeFilter : true)) || []; // Default to an empty array if data is not ready

  console.log("Filtered Data:", displayFilteredData);
  // Function to update the search param
  const handleFilterChange = (type) => {
    const newParams = new URLSearchParams(searchParams);
    if (type) {
      newParams.set("type", type); // Update type filter
    } else {
      newParams.delete("type"); // Remove filter when clearing
    }
    setSearchParams(newParams);
  };
  //  Van Loader
  // Loader

  return (
    <>
      {/* <Navbar /> */}
      <h1>Explore our van options.</h1>
      <nav className='navEl col-1-2'>
        <button
          onClick={() => handleFilterChange("simple")}
          className={`van-type-${
            typeFilter === "simple" ? "simple" : "btn-primary"
          }-selected`}
          // className='van-type-simple-selected btn-primary'
        >
          Simple
        </button>
        <button
          onClick={() => handleFilterChange("luxury")}
          className={`van-type-${
            typeFilter === "luxury" ? "luxury" : "btn-primary"
          }-selected`}
          // className='van-type-luxury-selected btn-primary'
        >
          Luxury
        </button>
        <button
          onClick={() => handleFilterChange("rugged")}
          className={`van-type-${
            typeFilter === "rugged" ? "rugged" : "btn-primary"
          }-selected`}
          //  className='van-type-rugged-selected btn-primary'
        >
          Rugged
        </button>
        {typeFilter ? (
          <button
            onClick={() => handleFilterChange(null)}
            className='btn-primary'
          >
            Clear
          </button>
        ) : null}
      </nav>

      <div className='vansBody col-12'>
        {/* Display Filtered Vans */}
        <div className='vansBody col-12'>
          {displayFilteredData.map((van) => (
            <ul key={van.id} className='vansContainer'>
              <li className='center'>
                <h3>Name: {van.name}</h3>
                {/* Just took of the absolute path to make it a relative path */}
                {/* <Link to={`/vans/${van.id}`}> */}
                <Link
                  to={van.id}
                  state={{
                    search: `?${searchParams.toString()}`,
                    type: typeFilter,
                  }}
                >
                  <img src={van.imageUrl} alt={`${van.name} van`} />
                </Link>
                <p>
                  <strong>Price: $</strong> {van.price}/day
                </p>
                <p>
                  <strong className={`van-type-${van.type}-selected`}>
                    Type: {van.type}
                  </strong>
                </p>
              </li>
            </ul>
          ))}
        </div>
        {/* {data &&
          data.vans.map((van) => (
            <ul key={van.id} className='vansContainer'>
              <li key={van.id} className='center'>
                <h3> Name: {van.name}</h3>
                <Link to={`/vans/${van.id}`}>
                  <img src={van.imageUrl} alt={van.name + " vans"} />
                </Link>{" "}
                <p>
                  <strong>Price: $ </strong>
                  {van.price}/day
                </p>
                <p>
                  <strong>Description: </strong>
                  {van.description}
                </p>
                <p>
                  <strong className={`van-type-${van.type}-selected`}>
                    Type: {van.type}
                  </strong>
                </p>
              </li>
            </ul>
          ))} */}
      </div>
    </>
  );
};

export default Vans;
