import React from "react";
import Footer from "../components/haku/Footer";
import Header from "../components/haku/Navigation";
import Banner from "../components/layout/partials/Banner";

const LayoutDefault = ({ children }) => (
  <>
    <Header></Header>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <main className="site-content">{children}</main>
    <Footer/>
  </>
);

export default LayoutDefault;
