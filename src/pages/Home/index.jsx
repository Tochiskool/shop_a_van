import React, { useState } from "react";
import "./home.css";
// import Navbar from "../Navbar";
import house from "./images/house.jpg";
import UseFetch from "../../useFetch";
import Vans from "../Vans";
import { Link } from "react-router-dom";
// import Layout from "../Layout";
const Home = () => {
  const [toggleVisibility, setToggleVisibility] = useState(false);

  const [data] = UseFetch("/api/vans");

  const handleVisibility = () => {
    if (!toggleVisibility) {
      setToggleVisibility(true);
    } else {
      setToggleVisibility(false);
    }
  };
  console.log(data);
  return (
    <section className='home'>
      <h1>#VANLIFE</h1>60"
      <div className='container'>
        <div className='row'>
          <div className='col-1-2'>
            <div className='pushDown'>
              {/* <Navbar /> */}
              {/* <Layout /> */}
              <div className='first-col'>
                <h1>You got the travel plans, we got the travel van</h1>
                <p>
                  At Scrimba our goal is to create the best possible coding
                  school at the cost of a gym membership! 💜 If we succeed with
                  this, it will give anyone who wants to become a software
                  developer a realistic shot at succeeding, regardless of where
                  they live and the size of their wallets 🎉 The Frontend
                  Developer Career Path aims to teach you everything you need to
                  become a Junior Developer, or you could take a deep-dive with
                  one of our advanced courses 🚀
                </p>
                <Link to='/vans'>
                  <button
                    // onClick={handleVisibility}
                    className='col-12 btn btn-primary'
                  >
                    Find your van. To view vans on this page scroll down and
                    explore
                  </button>
                </Link>
                {/* <div>{toggleVisibility && <Vans />}</div> */}
              </div>
            </div>
          </div>
          <div className='col-1-2'>
            <div className='pushUp'>
              {/* <Navbar /> */}
              {/* <Layout /> */}
              <h2>Our services are rated the best</h2>
              <div className='second-col'>
                <img className='bg' src={house} alt='beautiful house' />
                <p>
                  At Scrimba our goal is to create the best possible coding
                  school at the cost of a gym membership! 💜 If we succeed with
                  this, it will give anyone who wants to become a software
                  developer a realistic shot at succeeding, regardless of where
                  they live and the size of their wallets 🎉 The Frontend
                  Developer Career Path aims to teach you everything you need to
                  become a Junior Developer, or you could take a deep-dive with
                  one of our advanced courses 🚀
                </p>
                <div className='dialogue'>
                  <blockquote>
                    <h3>Your destination is waiting</h3>
                    <h3>Your van is ready ....readmore</h3>
                  </blockquote>
                  <button
                    onClick={handleVisibility}
                    className='btn btn-primary center-block'
                  >
                    Explore our vans
                  </button>
                  <div className='col-12'>{toggleVisibility && <Vans />}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
