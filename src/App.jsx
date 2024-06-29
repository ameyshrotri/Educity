import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Programs from "./Components/Programs/Programs";
import Title from "./Components/Title/Title";
import About from "./Components/About/About";
import Campus from "./Components/Campus/Campus";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import VideoPlayer from "./Components/Video Player/VideoPlayer";

const App = () => {
  const [platState, setPlayState] = useState(false);

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle="Our Program" title="what we offer" />
        <Programs />
        <About setPlayState={setPlayState} />
        <Title subTitle="Campus Photos" title="Gallery" />
        <Campus />
        <Title subTitle="What student says" title="TESTIMONIALS" />
        <Testimonials />
        <Title subTitle="Contact Us" title="Get in Touch" />
        <Contact />
        <Footer />
      </div>
      <VideoPlayer platState={platState} setPlayState={setPlayState} />
    </div>
  );
};

export default App;
