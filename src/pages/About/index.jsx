import React from "react";
import { Link } from "react-router-dom";
import UseFetch from "../../useFetch";
import Image from "./images/house.jpg";
import "./about.css";

// import Navbar from "../Navbar";

const About = () => {
  const [data] = UseFetch("/api/vans");
  console.log(data);
  const rightObject = {
    price: 60,
    imageUrl: Image,
    description:
      "This is one of the best van that modern American want do. They are even ready to pay double the price",
  };
  return (
    <>
      <div className='container'>
        <div className='row'>
          <section>
            <div>
              <h2>Explore our van options</h2>
              <p>
                We are the best shop in the city where you can hire a van for as
                long as you want. Our vans are periodically checked and you are
                hightly welcome to come and have a test drive of any of the vans
                you choose.
              </p>
            </div>
          </section>
          <div className='col-1-2'>
            <div className='col-12'>
              <div className='vansBody'>
                {data &&
                  data.vans.map((e) => (
                    <ul className='vansContainer'>
                      <li key={e.id} className='center'>
                        <h3> Name: {e.name}</h3>
                        <img
                          style={{ maxWidth: "200px" }}
                          src={e.imageUrl}
                          alt={e.name}
                        />
                        <p>
                          <strong>Price: </strong>
                          {e.price}
                        </p>
                        <p>
                          <strong>Description: </strong>
                          {e.description}
                        </p>
                        <p>
                          <strong>Type: {e.type}</strong>
                        </p>
                      </li>
                    </ul>
                  ))}
              </div>
            </div>
          </div>
          <div className='col-1-2'>
            <div className='col-12 right'>
              <Link to='/'>Back to home</Link>
              <div>
                <div className='imageBackground'>
                  <img src={rightObject.imageUrl} alt='a beautiful car' />
                </div>
                <div className='carStyle'>
                  <button className='btn-primary'>Explore</button>
                  <p>price: {rightObject.price}</p>
                  <p>Brief description: {rightObject.description}</p>
                  <button className='col-12 btn-primary'>Explore more</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
