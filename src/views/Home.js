import React, { Fragment } from "react";

import Hero from "../components/Hero";
import Content from "../components/Content";
import PizzaOrder from "../components/PizzaOrder";

const Home = () => (
  <Fragment>
    <Hero />
    <hr />
    <PizzaOrder />
    <Content />
  </Fragment>
);

export default Home;
