import React from "react";
import Hero from "../components/Hero/Hero";
// import Projects from "../components/Anouncements/Anouncement";
import Anouncement from "../components/Anouncement/Anouncement";
import About from "../components/About/About";
import Services from "../components/Services/Services";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import Team from "../components/Team/Team"
import Downloads from "../components/Downloads/Downloads";
import Client from "../components/Client/Client";

// import FixSocialIcon from "../components/SocialIcon/FixSocialIcon";
// import ScrollToTop from "../components/SocialIcon/ScrollToTop";
function Home() {
  return (
    <>
      <Hero />
      <About />
      <Team/>
      <Services />
      <Anouncement />
      <Downloads/>
      <Contact />
      {/* <FixSocialIcon /> */}
      <Client/>
      <Footer />
      {/* <ScrollToTop /> */}
    </>
  );
}

export default Home;
