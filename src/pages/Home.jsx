import React from "react";
import Hero from "../components/Hero/Hero"
import Services from "../components/Services/Services";
import Banner from "../components/Banner/Banner";
import Subscribe from "../components/Subscribe/Subscribe";
import Banner2 from "../components/Banner/Banner2";
import Features from "../components/Features/Features";
import Disinfection from "../components/Disinfection/Disinfection";
import Charging from "../components/Charging/Charging";
import Management from "../components/Management/Management";
import Slam from "../components/Slam/Slam";

const App = () => {
  return (
    <main className="overflow-x-hidden bg-white text-dark">
      <Hero />
      <Services />
      {/* <Features/> */}
      <Disinfection/>
      <Charging/>
      <Management/>
      <Slam/>
      <Banner />
      <Subscribe />
      <Banner2 />
    </main>
  );
};

export default App;