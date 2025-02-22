import React from "react";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home, { loader as homePageLoader } from "./pages/Home";
import About from "./pages/About";
import Vans, { vanLoader as vanPageLoader } from "./pages/Vans";
import "./server";
import NoPage from "./pages/NoPage";
import Layout from "./pages/Layout";
import VanDetail from "./pages/VanDetail";
import Host from "./pages/Host";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";
import Dashboard from "./pages/Host/Dashboard";
import HostVans from "./pages/Host/HostVans";
import HostVansDetails from "./pages/Host/HostVansDetails";
import Princing from "./pages/Host/HostVansDetails/Pricing";
import Photos from "./pages/Host/HostVansDetails/Photos";
import HostVanInfo from "./pages/Host/HostVansDetails/HostVanInfo";
import Error from "./components/Error";
import Login from "./pages/Login";

// import Navbar from "./pages/Navbar";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} loader={homePageLoader} />
      <Route path='about' element={<About />} />
      <Route
        path='vans'
        element={<Vans />}
        loader={vanPageLoader}
        errorElement={<Error />}
      />
      <Route path='vans/:id' element={<VanDetail />} />
      <Route path='host' element={<Host />}>
        <Route index element={<Dashboard />} />
        <Route path='income' element={<Income />} />
        <Route path='reviews' element={<Reviews />} />
        <Route path='vans' element={<HostVans />} />
        {/* No nesting of vans/id becasue they are not sharing the same UI */}
        <Route path='vans/:id' element={<HostVansDetails />}>
          <Route index element={<HostVanInfo />} />
          <Route path='pricing' element={<Princing />} />
          <Route path='photos' element={<Photos />} />
        </Route>
      </Route>
      <Route path='login' element={<Login />} />
      <Route path='*' element={<NoPage />} />
    </Route>
  )
);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
