
import React from "react";
import HeroAboutUs from "../Components/AboutUs/HeroAboutUs";
import Mission from "../Components/AboutUs/Mission";
import OurVision from "../Components/AboutUs/OurVision";
import Testimonials from "../Components/AboutUs/Testimonials";
import CallToAction from "../Components/AboutUs/CallToAction";
import Container from "../Layout/Container";
import useTitle from "../Hooks/useTitle";


const AboutUs = () => {
      // for changing Page title Dynamically.
    useTitle("About Us");
  return (
    <div className="bg-secondary text-white min-h-screen px-2">
        <Container>
            <HeroAboutUs/>
            <Mission/>
            <OurVision/>
            <Testimonials />
            <CallToAction/>
        </Container>
    </div>
  );
};
export default AboutUs;
