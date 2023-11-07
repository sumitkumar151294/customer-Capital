import React from "react";
import AboutusContent from "../AboutusContent/AboutusContent";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import NewHeader from "../NewHeader/NewHeader";
import Login from "../Login/Login";
const AboutUs = () => {
  return (
    <>
      <Header />
      <Login />
      <NewHeader />
      <AboutusContent />
      <Footer />
    </>
  );
};

export default AboutUs;
