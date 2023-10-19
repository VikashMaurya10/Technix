import React from "react";
import About from "../components/Home/About";
import Feature from "../components/Home/Feature";
import Landing from "../components/Home/Landing";
import Services1 from "../components/Home/Services1";
import Services2 from "../components/Home/services2";
import Layout from "../components/Layout/Layout";

const Home = () => {
  return (
    <Layout>
      <Landing />
      <About />
      <Feature />
      <Services1 />
      <Services2 />
    </Layout>
  );
};

export default Home;
